"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FixedFAB = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const SaveButton = (_ref) => {
  let {
    ui,
    save,
    queue
  } = _ref;
  return !queue.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(FixedFAB, null, /*#__PURE__*/_react.default.createElement(ui.Fab, {
    color: "secondary",
    onClick: save
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "material-icons"
  }, "save")));
};

var _default = SaveButton;
exports.default = _default;

const FixedFAB = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  z-index: 1;\n"])));

exports.FixedFAB = FixedFAB;