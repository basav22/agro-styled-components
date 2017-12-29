// @ts-check

import styled from "styled-components";

export const AgroInputText = styled.input`
  display: block;
  width: 100%;
  border: 1px solid
    ${props =>
      props.error
        ? props.theme.input.error.borderColor
        : props.theme.input.default.borderColor};
  padding: 7px 20px;
  border-radius: 2px;
  display: ${props => (props.hidden ? "none" : "auto")};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.input.focus.borderColor};
  }
`;

export const AgroInputTextArea = styled.textarea`
  border: 1px solid
    ${props =>
      props.error
        ? props.theme.input.error.borderColor
        : props.theme.input.default.borderColor};
`;

export const AgroSelectInput = styled.select`
  border-radius: 3px;
  height: 34px;
  padding: 6px 12px;
  margin-left: 5px;
  background-color: ${props => (props.inherit ? "inherit" : "initial")};
`;

export const AgroCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    border: 2px solid #ccc;
    background: transparent;
    font-family: "Glyphicons Halflings";
  }

  &:checked + label:after {
    font-family: "Glyphicons Halflings";
    content: "\\e013";
    position: absolute;
    left: 4px;
    top: 0px;
    color: ${props => props.theme.label.primary.color};
  }
`;

export const AgroRadio = styled.input.attrs({
  type: "radio"
})`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  filter: alpha(opacity=0);

  & + label {
    position: relative;
    padding-left: 25px;
  }

  & + label:after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid;
    position: absolute;
    left: 0;
    top: 1px;
    border-radius: 100%;
  }

  &:checked + label:before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    background: #0b8;
    left: 5px;
    top: 6px;
    border-radius: 100%;
  }
`;
