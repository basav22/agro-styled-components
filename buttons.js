// @ts-check

import styled, { css } from "styled-components";

const btnSizes = {
  default: {
    size: "7px"
  },
  large: {
    size: "10px"
  }
};

const AgroBtnBase = styled.button`
  border-radius: 2px;
  border-width: 1px;
  padding: ${props =>
      props.large ? btnSizes.large.size : btnSizes.default.size}
    20px;
  width: ${props => (props.block ? "100%" : "auto")};
`;

const AgroBtnMixin = css`
  background-color: ${props => props.theme.buttons[props.agType].btnBg};
  border: 1px solid ${props => props.theme.buttons[props.agType].btnBg};
  color: ${props => props.theme.buttons[props.agType].btnColor};

  &:hover {
    background-color: ${props => props.theme.buttons[props.agType].btnBgHover};
    border: 1px solid ${props => props.theme.buttons[props.agType].btnBgHover};
    color: ${props => props.theme.buttons[props.agType].btnColor};
  }
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    background-color: ${props => props.theme.buttons[props.agType].btnDisabled};
    border: 1px solid ${props => props.theme.buttons[props.agType].btnDisabled};
  }
`;

export const AgroButton = AgroBtnBase.extend`
  ${AgroBtnMixin};
`;

export const AgroBtnPrimary = AgroBtnBase.extend.attrs({
  agType: "primary"
})`
  ${AgroBtnMixin}
`;

export const AgroBtnDefault = AgroBtnBase.extend.attrs({
  agType: "default"
})`${AgroBtnMixin}`;

//////////// TODO: think of moving to seperate file
const AgroBtnLinkBase = styled.button`
  border: 0px;
  padding: 0px;
`;

export const AgroBtnLink = styled(AgroBtnLinkBase)`
  color: ${props => {
    const agType = props.agType || "default";
    return props.theme.buttons[agType].btnBg;
  }};
  text-decoration: ${props => (props.decorated ? "underline" : "none")};
  background-color: transparent;
`;

export const AgroBtnCheckbox = styled(AgroBtnLinkBase)`
  border-radius: 0;
  background: #fff;
  border: 2px solid #ddd;
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const AgroIconBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: 10px;
`;


