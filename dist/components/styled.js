"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleBucket = exports.SideBar = exports.SaveButton = exports.Divider = exports.Label = exports.CardContent = exports.Subtitle = exports.Header = exports.Title = exports.ActionBar = exports.Card = exports.Pane = exports.BigIconHeader = exports.BigBar = exports.HeaderBar = exports.Main = exports.Spacer = exports.Row = exports.Column = exports.muiTheme = exports.THEME = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("@material-ui/core/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// https://poolors.com/379968-f0f0ef-c7a487-5b5348
const THEME = {
  light: '#f0f0ef',
  dark: '#5b5348',
  primary: '#379968',
  secondary: '#c7a487'
};
exports.THEME = THEME;
const muiTheme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: THEME.primary
    },
    secondary: {
      main: THEME.secondary
    }
  }
});
exports.muiTheme = muiTheme;

const Column = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: ", ";\n  align-items: ", ";\n"])), props => props.justify, props => props.align);

exports.Column = Column;

const Row = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-wrap: ", ";\n  & * {\n    margin: 0px 5px;\n  }\n  & .flex-50 {\n    flex: .5;\n  }\n  & .flex-100 {\n    flex: 1;\n  }\n  & .flex-200 {\n    flex: 2;\n  }\n"])), props => props.justify, props => props.align, props => props.wrap);

exports.Row = Row;

const Spacer = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));

exports.Spacer = Spacer;

const Main = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"])), THEME.light, THEME.dark);

exports.Main = Main;

const HeaderBar = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 5em;\n  display: flex;\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  margin-bottom: .5em;\n  & * {\n    margin: 0em .5em;\n  }\n"])), THEME.primary, THEME.light);

exports.HeaderBar = HeaderBar;

const BigBar = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 12em;\n  display: flex;\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  & * {\n    margin: 0em .5em;\n  }\n  & input {\n    color: ", ";\n    font-size: larger;\n  }\n  & .material-icons {\n    cursor: pointer;\n  }\n"])), THEME.primary, THEME.light, THEME.light);

exports.BigBar = BigBar;

const BigIconHeader = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 10em;\n  margin: inherit;\n"])));

exports.BigIconHeader = BigIconHeader;

const Pane = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 25vw;\n  min-width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n"])));

exports.Pane = Pane;

const Card = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 90%;\n  min-height: 100px;\n  max-width: 350px;\n  background-color: white;\n  box-shadow: rgb(91 83 72 / 10%) 2px 2px 10px;\n  border-radius: 3px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  margin-top: .5em;\n"])));

exports.Card = Card;

const ActionBar = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row-reverse;\n  padding: .7em 0;\n"])));

exports.ActionBar = ActionBar;

const Title = _styledComponents.default.h2(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: .5em 0;\n  font-weight: 200;\n"])));

exports.Title = Title;

const Header = _styledComponents.default.h1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: .5em .5em;\n  font-weight: 200;\n  text-transform: uppercase;\n"])));

exports.Header = Header;

const Subtitle = _styledComponents.default.h4(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin: .5em 0;\n  font-weight: 200;\n"])));

exports.Subtitle = Subtitle;

const CardContent = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n"])));

exports.CardContent = CardContent;

const Label = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  opacity: .6;\n  margin: .3em 0;\n"])));

exports.Label = Label;

const Divider = _styledComponents.default.hr(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-color: ", ";\n  border-style: solid;\n"])), THEME.light);

exports.Divider = Divider;

const SaveButton = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  z-index: 1;\n"])));

exports.SaveButton = SaveButton;

const SideBar = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 100;\n  height: 100vh;\n  top: 0px;\n  ", ": 0px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: rgb(91 83 72 / 10%) 2px 2px 10px;\n  transition: ", " ease-out .3s;\n  &.hidden {\n    ", ": -350px;\n  }\n"])), props => props.side, props => props.side, props => props.side);

exports.SideBar = SideBar;

const SimpleBucket = _styledComponents.default.h2(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  flex: 1;\n  justify-content: space-around;\n  border: 5px dashed ", ";\n  text-align: center;\n  margin: 3px;\n  opacity: .5;\n  &.match {\n    background-color: ", ";\n  }\n"])), THEME.dark, THEME.primary);

exports.SimpleBucket = SimpleBucket;