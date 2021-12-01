"use strict";

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Profile = (_ref) => {
  let {
    profile,
    edit,
    toggleEdit,
    onChange,
    saveState,
    ui
  } = _ref;

  function updateField(field) {
    return (_ref2) => {
      let {
        target
      } = _ref2;
      let t = (0, _.setAttr)(profile.thing, _.profileStruct[field], target.value);
      saveState.updateQueue((0, _.addToUpdateQueue)(saveState.queue, t));
      onChange(_objectSpread(_objectSpread({}, profile), {}, {
        thing: t,
        [field]: target.value
      }));
    };
  }

  function updateName(_ref3) {
    let {
      target
    } = _ref3;
    let [firstName = '', lastName = ''] = target.value.split(' ');
    let t = (0, _.setAttr)(profile.thing, _.profileStruct['firstName'], firstName);
    t = (0, _.setAttr)(t, _.profileStruct['lastName'], lastName);
    saveState.updateQueue((0, _.addToUpdateQueue)(saveState.queue, t));
    onChange(_objectSpread(_objectSpread({}, profile), {}, {
      thing: t,
      firstName,
      lastName
    }));
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
  }, /*#__PURE__*/_react.default.createElement(ui.IconButton, {
    color: "inherit",
    href: "https://kitchen.wkgreen.dev"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "material-icons large"
  }, "kitchen")))), /*#__PURE__*/_react.default.createElement(_.Column, {
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
    onChange: updateField("nickname")
  }), /*#__PURE__*/_react.default.createElement(ui.Input, {
    type: "text",
    placeholder: "email",
    defaultValue: profile.email || "",
    startAdornment: /*#__PURE__*/_react.default.createElement(ui.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "material-icons"
    }, "email")),
    onChange: updateField("email")
  }), !!saveState.queue.length && /*#__PURE__*/_react.default.createElement(_.SaveButton, null, /*#__PURE__*/_react.default.createElement(ui.Button, {
    variant: "contained",
    color: "secondary",
    onClick: saveState.saveFromQ
  }, "Save"))));
};

var _default = Profile;
exports.default = _default;