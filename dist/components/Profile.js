"use strict";

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Profile = (_ref) => {
  let {
    profile,
    onChange,
    ui
  } = _ref;
  const [edit, toggleEdit] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_.HeaderBar, null, "Hello from Profile", /*#__PURE__*/_react.default.createElement(_.Spacer, null), /*#__PURE__*/_react.default.createElement(ui.Button, null, "Save"));
  const [thing, setThing] = (0, _react.useState)();
  const {
    queue,
    saveFromQ,
    updateQueue
  } = (0, _react.useContext)(_.SaveState);
  (0, _react.useEffect)(() => {
    if (!profile) return;
    setThing(profile.thing);
  }, [profile]);

  function update(field) {
    return (_ref2) => {
      let {
        target
      } = _ref2;
      onChange(_objectSpread(_objectSpread({}, profile), {}, {
        [field]: target.value
      }));
      let t = (0, _.setAttr)(thing, _.profileStruct[field], target.value);
      updateQueue((0, _.addToUpdateQueue)(queue, t));
      setThing(t);
    };
  }

  function updateName(_ref3) {
    let {
      target
    } = _ref3;
    let [firstName = '', lastName = ''] = target.value.split(' ');
    onChange(_objectSpread(_objectSpread({}, profile), {}, {
      firstName,
      lastName
    }));
    let t = (0, _.setAttr)(thing, _.profileStruct['firstName'], firstName);
    t = (0, _.setAttr)(t, _.profileStruct['lastName'], lastName);
    setThing(t);
    updateQueue((0, _.addToUpdateQueue)(queue, t));
  }

  if (!profile) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.BigBar, null, /*#__PURE__*/_react.default.createElement(_.BigIconHeader, {
    className: "material-icons"
  }, "account_circle"), /*#__PURE__*/_react.default.createElement(_.Column, {
    justify: "center"
  }, !edit ? /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      margin: 0
    }
  }, profile.firstName, " ", profile.lastName, /*#__PURE__*/_react.default.createElement("span", {
    className: "material-icons",
    onClick: () => toggleEdit(!edit)
  }, "edit")) : /*#__PURE__*/_react.default.createElement(ui.Input, {
    type: "text",
    placeholder: "name",
    defaultValue: profile.firstName ? "".concat(profile.firstName, " ").concat(profile.lastName) : "",
    endAdornment: /*#__PURE__*/_react.default.createElement(ui.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(ui.IconButton, {
      onClick: () => toggleEdit(!edit),
      color: "inherit"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "material-icons"
    }, "done"))),
    onChange: updateName
  }), /*#__PURE__*/_react.default.createElement("p", null, profile.nickname)), /*#__PURE__*/_react.default.createElement(_.Spacer, null), /*#__PURE__*/_react.default.createElement(_.Column, {
    justify: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(ui.IconButton, {
    color: "inherit"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "material-icons large"
  }, "request_quote"))))), /*#__PURE__*/_react.default.createElement(_.Column, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(ui.Input, {
    type: "text",
    placeholder: "nickname",
    defaultValue: profile.nickname || "",
    startAdornment: /*#__PURE__*/_react.default.createElement(ui.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "material-icons"
    }, "account_circle")),
    onChange: update("nickname")
  }), /*#__PURE__*/_react.default.createElement(ui.Input, {
    type: "text",
    placeholder: "email",
    defaultValue: profile.email || "",
    startAdornment: /*#__PURE__*/_react.default.createElement(ui.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "material-icons"
    }, "email")),
    onChange: update("email")
  }), !!queue.length && /*#__PURE__*/_react.default.createElement(_.SaveButton, null, /*#__PURE__*/_react.default.createElement(ui.Button, {
    variant: "contained",
    color: "secondary",
    onClick: saveFromQ
  }, "Save"))));
};

var _default = Profile;
exports.default = _default;