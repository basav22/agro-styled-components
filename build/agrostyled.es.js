import styled, { css } from 'styled-components';

var _templateObject = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-style: ", ";\n  font-size: ", ";\n\n  text-align: ", ";\n  display: ", ";\n  color: ", ";\n  cursor: inherit;\n  margin-bottom: 0px;\n  word-wrap: break-word;\n"], ["\n  font-weight: ", ";\n  font-style: ", ";\n  font-size: ", ";\n\n  text-align: ", ";\n  display: ", ";\n  color: ", ";\n  cursor: inherit;\n  margin-bottom: 0px;\n  word-wrap: break-word;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var AgroLabel = styled.label(_templateObject, function (props) {
  return props.agWeight ? props.agWeight : "normal";
}, function (props) {
  return props.agStyle ? props.agStyle : "inherit";
}, function (props) {
  var agSize = props.agSize || "default";
  return props.theme.body.fonts[agSize];
}, function (props) {
  return props.align || "left";
}, function (props) {
  return props.block ? "block" : "initial";
}, function (props) {
  var agType = props.agType;
  if (!agType) return "inherit";
  return props.theme.label[agType].color;
});

var _templateObject$1 = _taggedTemplateLiteral$1(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  display: block;\n"], ["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  display: block;\n"]);

function _taggedTemplateLiteral$1(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var AgroHeading = styled(AgroLabel)(_templateObject$1);

var _templateObject$2 = _taggedTemplateLiteral$2(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"]);

function _taggedTemplateLiteral$2(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var ModalHeading = AgroHeading.extend(_templateObject$2, function (props) {
  return props.theme.body.fonts.lg;
});

var ModalSubHeading = AgroLabel.extend(_templateObject$2, function (props) {
  return props.theme.body.fonts.md;
});

var modal = {
  ModalHeading: ModalHeading,
  ModalSubHeading: ModalSubHeading
};

var _templateObject$3 = _taggedTemplateLiteral$3(["\n  display: block;\n  width: 100%;\n  border: 1px solid\n    ", ";\n  padding: 7px 20px;\n  border-radius: 2px;\n  display: ", ";\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"], ["\n  display: block;\n  width: 100%;\n  border: 1px solid\n    ", ";\n  padding: 7px 20px;\n  border-radius: 2px;\n  display: ", ";\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"]);
var _templateObject2 = _taggedTemplateLiteral$3(["\n  border: 1px solid\n    ", ";\n"], ["\n  border: 1px solid\n    ", ";\n"]);
var _templateObject3 = _taggedTemplateLiteral$3(["\n  border-radius: 3px;\n  height: 34px;\n  padding: 6px 12px;\n  margin-left: 5px;\n  background-color: ", ";\n"], ["\n  border-radius: 3px;\n  height: 34px;\n  padding: 6px 12px;\n  margin-left: 5px;\n  background-color: ", ";\n"]);
var _templateObject4 = _taggedTemplateLiteral$3(["\n  position: absolute;\n  opacity: 0;\n\n  & + label {\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n  }\n\n  & + label:before {\n    content: \"\";\n    margin-right: 10px;\n    display: inline-block;\n    vertical-align: middle;\n    width: 25px;\n    height: 25px;\n    border: 2px solid #ccc;\n    background: transparent;\n    font-family: \"Glyphicons Halflings\";\n  }\n\n  &:checked + label:after {\n    font-family: \"Glyphicons Halflings\";\n    content: \"\\e013\";\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    color: ", ";\n  }\n"], ["\n  position: absolute;\n  opacity: 0;\n\n  & + label {\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n  }\n\n  & + label:before {\n    content: \"\";\n    margin-right: 10px;\n    display: inline-block;\n    vertical-align: middle;\n    width: 25px;\n    height: 25px;\n    border: 2px solid #ccc;\n    background: transparent;\n    font-family: \"Glyphicons Halflings\";\n  }\n\n  &:checked + label:after {\n    font-family: \"Glyphicons Halflings\";\n    content: \"\\\\e013\";\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    color: ", ";\n  }\n"]);
var _templateObject5 = _taggedTemplateLiteral$3(["\n  cursor: pointer;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n\n  & + label {\n    position: relative;\n    padding-left: 25px;\n  }\n\n  & + label:after {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    border: 2px solid;\n    position: absolute;\n    left: 0;\n    top: 1px;\n    border-radius: 100%;\n  }\n\n  &:checked + label:before {\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    background: #0b8;\n    left: 5px;\n    top: 6px;\n    border-radius: 100%;\n  }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n\n  & + label {\n    position: relative;\n    padding-left: 25px;\n  }\n\n  & + label:after {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    border: 2px solid;\n    position: absolute;\n    left: 0;\n    top: 1px;\n    border-radius: 100%;\n  }\n\n  &:checked + label:before {\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    background: #0b8;\n    left: 5px;\n    top: 6px;\n    border-radius: 100%;\n  }\n"]);

function _taggedTemplateLiteral$3(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var AgroInputText = styled.input(_templateObject$3, function (props) {
  return props.error ? props.theme.input.error.borderColor : props.theme.input.default.borderColor;
}, function (props) {
  return props.hidden ? "none" : "auto";
}, function (props) {
  return props.theme.input.focus.borderColor;
});

var AgroInputTextArea = styled.textarea(_templateObject2, function (props) {
  return props.error ? props.theme.input.error.borderColor : props.theme.input.default.borderColor;
});

var AgroSelectInput = styled.select(_templateObject3, function (props) {
  return props.inherit ? "inherit" : "initial";
});

var AgroCheckBox = styled.input.attrs({ type: "checkbox" })(_templateObject4, function (props) {
  return props.theme.label.primary.color;
});

var AgroRadio = styled.input.attrs({
  type: "radio"
})(_templateObject5);

var _templateObject$4 = _taggedTemplateLiteral$4(['\n    margin-top: 10px;\n    margin-bottom: 10px;\n    text-align: ', '\n'], ['\n    margin-top: 10px;\n    margin-bottom: 10px;\n    text-align: ', '\n']);

function _taggedTemplateLiteral$4(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var AgroPanel = styled.section(_templateObject$4, function (props) {
    return props.align;
});

var _templateObject$5 = _taggedTemplateLiteral$5(['\n    list-style-type: none;\n    margin-top: 0px;\n    margin-bottom: 10px;\n    padding: 0px;\n'], ['\n    list-style-type: none;\n    margin-top: 0px;\n    margin-bottom: 10px;\n    padding: 0px;\n']);

function _taggedTemplateLiteral$5(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var AgroList = styled.ul(_templateObject$5);

var _templateObject$6 = _taggedTemplateLiteral$6(["margin: 0;"], ["margin: 0;"]);
var _templateObject2$1 = _taggedTemplateLiteral$6(["\n  display: flex;\n  align-items: center;\n  font-weight: ", ";\n  padding-bottom: 1em;\n  margin-top: 0.5em;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  font-weight: ", ";\n  padding-bottom: 1em;\n  margin-top: 0.5em;\n  border-bottom: 1px solid ", ";\n"]);
var _templateObject3$1 = _taggedTemplateLiteral$6(["\n  flex: ", ";\n"], ["\n  flex: ", ";\n"]);

function _taggedTemplateLiteral$6(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var AgroTable = AgroList.extend(_templateObject$6);

var AgroTableRow = styled.li(_templateObject2$1, function (props) {
  return props.bold ? "bold" : "inherit";
}, function (props) {
  return props.theme.label.fainted.color;
});

var TableItem = styled.div(_templateObject3$1, function (props) {
  return props.agSize ? props.agSize : 1;
});

var AgroTableItem = TableItem;

var _templateObject$7 = _taggedTemplateLiteral$7(["\n  border-radius: 2px;\n  border-width: 1px;\n  padding: ", "\n    20px;\n  width: ", ";\n"], ["\n  border-radius: 2px;\n  border-width: 1px;\n  padding: ", "\n    20px;\n  width: ", ";\n"]);
var _templateObject2$2 = _taggedTemplateLiteral$7(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &[disabled],\n  &[disabled]:hover {\n    cursor: not-allowed;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &[disabled],\n  &[disabled]:hover {\n    cursor: not-allowed;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"]);
var _templateObject3$2 = _taggedTemplateLiteral$7(["\n  ", ";\n"], ["\n  ", ";\n"]);
var _templateObject4$1 = _taggedTemplateLiteral$7(["\n  ", "\n"], ["\n  ", "\n"]);
var _templateObject5$1 = _taggedTemplateLiteral$7(["", ""], ["", ""]);
var _templateObject6 = _taggedTemplateLiteral$7(["\n  border: 0px;\n  padding: 0px;\n"], ["\n  border: 0px;\n  padding: 0px;\n"]);
var _templateObject7 = _taggedTemplateLiteral$7(["\n  color: ", ";\n  text-decoration: ", ";\n  background-color: transparent;\n"], ["\n  color: ", ";\n  text-decoration: ", ";\n  background-color: transparent;\n"]);
var _templateObject8 = _taggedTemplateLiteral$7(["\n  border-radius: 0;\n  background: #fff;\n  border: 2px solid #ddd;\n  margin-bottom: 5px;\n  margin-right: 10px;\n"], ["\n  border-radius: 0;\n  background: #fff;\n  border: 2px solid #ddd;\n  margin-bottom: 5px;\n  margin-right: 10px;\n"]);
var _templateObject9 = _taggedTemplateLiteral$7(["\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 10px;\n"], ["\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 10px;\n"]);

function _taggedTemplateLiteral$7(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check

var btnSizes = {
  default: {
    size: "7px"
  },
  large: {
    size: "10px"
  }
};

var AgroBtnBase = styled.button(_templateObject$7, function (props) {
  return props.large ? btnSizes.large.size : btnSizes.default.size;
}, function (props) {
  return props.block ? "100%" : "auto";
});

var AgroBtnMixin = css(_templateObject2$2, function (props) {
  return props.theme.buttons[props.agType].btnBg;
}, function (props) {
  return props.theme.buttons[props.agType].btnBg;
}, function (props) {
  return props.theme.buttons[props.agType].btnColor;
}, function (props) {
  return props.theme.buttons[props.agType].btnBgHover;
}, function (props) {
  return props.theme.buttons[props.agType].btnBgHover;
}, function (props) {
  return props.theme.buttons[props.agType].btnColor;
}, function (props) {
  return props.theme.buttons[props.agType].btnDisabled;
}, function (props) {
  return props.theme.buttons[props.agType].btnDisabled;
});

var AgroButton = AgroBtnBase.extend(_templateObject3$2, AgroBtnMixin);

var AgroBtnPrimary = AgroBtnBase.extend.attrs({
  agType: "primary"
})(_templateObject4$1, AgroBtnMixin);

var AgroBtnDefault = AgroBtnBase.extend.attrs({
  agType: "default"
})(_templateObject5$1, AgroBtnMixin);

//////////// TODO: think of moving to seperate file
var AgroBtnLinkBase = styled.button(_templateObject6);

var AgroBtnLink = styled(AgroBtnLinkBase)(_templateObject7, function (props) {
  var agType = props.agType || "default";
  return props.theme.buttons[agType].btnBg;
}, function (props) {
  return props.decorated ? "underline" : "none";
});

var AgroBtnCheckbox = styled(AgroBtnLinkBase)(_templateObject8);

var AgroIconBtn = styled.button(_templateObject9);

// import { applyTheme } from "./theme";

export { AgroLabel, AgroHeading, AgroPanel, modal as AgroModalHeading, AgroCheckBox, AgroInputText, AgroInputTextArea, AgroRadio, AgroSelectInput, AgroList, AgroBtnCheckbox, AgroButton, AgroBtnLink, AgroIconBtn, AgroTable, AgroTableRow, AgroTableItem };
//# sourceMappingURL=agrostyled.es.js.map
