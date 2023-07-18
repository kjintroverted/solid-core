"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appLogin = appLogin;
exports.initDataset = initDataset;
exports.loadDataset = loadDataset;
exports.getThings = getThings;
exports.loadFromDataset = loadFromDataset;
exports.loadByName = loadByName;
exports.loadAllByName = loadAllByName;
exports.loadThing = loadThing;
exports.newThing = newThing;
exports.setAttr = setAttr;
exports.setAllAttr = setAllAttr;
exports.initThing = initThing;
exports.saveThing = saveThing;
exports.deleteThing = deleteThing;
exports.getDomain = getDomain;
exports.nameFilter = nameFilter;
exports.resourceName = resourceName;
exports.getAndParse = getAndParse;
exports.stringifyAndSet = stringifyAndSet;
exports.addToUpdateQueue = addToUpdateQueue;
exports.save = save;
exports.SaveState = void 0;

var _solidClient = require("@inrupt/solid-client");

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

var _nanoid = require("nanoid");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let appDataSetURL;

async function appLogin(client) {
  await (0, _solidClientAuthnBrowser.login)({
    oidcIssuer: "https://inrupt.net",
    redirectUrl: window.location.href,
    clientName: client ? client : "wkgreen.dev"
  });
}

async function initDataset(url) {
  let dataset = (0, _solidClient.createSolidDataset)();
  dataset = await (0, _solidClient.saveSolidDatasetAt)(url, dataset, {
    fetch: _solidClientAuthnBrowser.fetch
  });
  return dataset;
}

async function loadDataset() {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appDataSetURL;
  appDataSetURL = url;
  let dataset;

  try {
    dataset = await (0, _solidClient.getSolidDataset)(url, {
      fetch: _solidClientAuthnBrowser.fetch
    });
  } catch (e) {
    if (e.toString().indexOf("404") > 0) {
      console.info("Could not find dataset at", url);
      console.info("Attempting to create dataset at", url);
      dataset = await initDataset(url);
    } else {
      throw e;
    }
  }

  return dataset;
}

function getThings(dataset) {
  return (0, _solidClient.getThingAll)(dataset);
}

function loadFromDataset(dataset, url, struct) {
  const thing = (0, _solidClient.getThing)(dataset, url);

  if (!thing) {
    console.error("Cannot find ".concat(url, " in dataset."), dataset);
    return {
      thing
    };
  }

  let datum = {};

  for (let field in struct) {
    let attribute = struct[field];
    datum[field] = attribute.parse(thing, attribute.predicate);
  }

  return _objectSpread(_objectSpread({}, datum), {}, {
    thing,
    struct
  });
}

function loadByName(dataset, name, struct) {
  const thing = getThings(dataset).find(nameFilter(name));

  if (!thing) {
    console.info("No things with name \"".concat(name, "\" found."));
    return null;
  }

  return loadFromDataset(dataset, thing.url, struct);
}

function loadAllByName(dataset, name, struct) {
  const things = getThings(dataset);
  return things.filter(nameFilter(name)).map(t => loadFromDataset(dataset, t.url, struct));
}

async function loadThing(url, struct) {
  if (!(0, _solidClientAuthnBrowser.getDefaultSession)().info.isLoggedIn) {
    await (0, _solidClientAuthnBrowser.logout)();
    return new Error("Session Expired. Please Login.");
  }

  const dataset = await (0, _solidClient.getSolidDataset)(url.split('#')[0], {
    fetch: _solidClientAuthnBrowser.fetch
  });
  return loadFromDataset(dataset, url, struct);
}

function newThing(name, simpleNaming) {
  let id = simpleNaming ? name : "".concat(name, "-").concat((0, _nanoid.nanoid)());
  return (0, _solidClient.createThing)({
    name: id
  });
}

function setAttr(thing, attribute, value) {
  if (!attribute) {
    console.info("Skipping assignment. No struct attribute found.");
    return null;
  }

  thing = attribute.set(thing, attribute.predicate, value);
  return thing;
}

function setAllAttr(thing, data) {
  const {
    struct
  } = data;

  for (let attr in data) {
    if (!struct[attr]) {
      console.info("Skipping assignment. No struct attribute found for ".concat(attr, "."));
      continue;
    }

    thing = struct[attr].set(thing, struct[attr].predicate, data[attr]);
  }

  return thing;
}

async function initThing(name, data, struct) {
  let thing = newThing(name);
  thing = setAllAttr(thing, _objectSpread(_objectSpread({}, data), {}, {
    struct
  }));
  let {
    dataset,
    saved: url
  } = await saveThing(thing);
  thing = await loadThing(url, struct);
  return {
    dataset,
    thing
  };
}

async function saveThing(thing, dataset) {
  const dataURL = isTemp(thing.url) ? appDataSetURL : resourceURL(thing.url);

  if (!dataset) {
    dataset = await (0, _solidClient.getSolidDataset)(dataURL, {
      fetch: _solidClientAuthnBrowser.fetch
    });
  }

  dataset = (0, _solidClient.setThing)(dataset, thing);
  dataset = await (0, _solidClient.saveSolidDatasetAt)(dataURL, dataset, {
    fetch: _solidClientAuthnBrowser.fetch
  });
  let url = isTemp(thing.url) ? appDataSetURL + "#" + getThingNameFromTempURL(thing.url) : thing.url;
  return {
    dataset,
    saved: url
  };
}

async function deleteThing(thing) {
  const dataURL = resourceURL(thing.url);
  let dataset = await (0, _solidClient.getSolidDataset)(dataURL, {
    fetch: _solidClientAuthnBrowser.fetch
  });
  dataset = (0, _solidClient.removeThing)(dataset, thing);
  dataset = await (0, _solidClient.saveSolidDatasetAt)(dataURL, dataset, {
    fetch: _solidClientAuthnBrowser.fetch
  });
  return {
    dataset,
    deleted: dataURL
  };
}

function getDomain(url) {
  const regex = /https:\/\/([^,\s]+\.[^,\s]+?)(?=\/|,|\s|$|\?|#)/g;
  return regex.exec(url)[0];
}

function nameFilter(str) {
  return thing => thing.url.indexOf(str) >= 0;
}

function getThingNameFromTempURL(url) {
  return url.split('/').splice(-1);
}

function resourceURL(url) {
  return url.split('#')[0];
}

function resourceName(url) {
  return url.split('#')[1];
}

function isTemp(url) {
  return url.indexOf('#') < 0;
}

function getAndParse(thing, url) {
  let rawData = (0, _solidClient.getStringNoLocale)(thing, url);
  return JSON.parse(rawData);
}

function stringifyAndSet(thing, url, data) {
  let value = JSON.stringify(data);
  return (0, _solidClient.setStringNoLocale)(thing, url, value);
} // SAVE STATE ===========================


function addToUpdateQueue(q, thing) {
  let i = q.findIndex(e => thing.url === e.url);
  return i < 0 ? [...q, thing] : [...q.slice(0, i), thing, ...q.slice(i + 1)];
}

async function save(q) {
  let res = [];
  let dataset;

  for (let i in q) {
    let updateData = await saveThing(q[i], dataset);
    dataset = updateData.dataset;
    res = [...res, updateData.saved];
  }

  console.log("Saved:", res);
  return dataset;
}

const SaveState = /*#__PURE__*/_react.default.createContext({
  queue: [],
  updateQueue: () => {}
});

exports.SaveState = SaveState;