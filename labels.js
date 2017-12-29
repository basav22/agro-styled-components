// @ts-check

import styled from "styled-components";

export const AgroLabel = styled.label`
  font-weight: ${props => (props.agWeight ? props.agWeight : "normal")};
  font-style: ${props => (props.agStyle ? props.agStyle : "inherit")};
  font-size: ${props => {
    const agSize = props.agSize || "default";
    return props.theme.body.fonts[agSize];
  }};

  text-align: ${props => props.align || "left"};
  display: ${props => (props.block ? "block" : "initial")};
  color: ${props => {
    const agType = props.agType;
    if (!agType) return "inherit";
    return props.theme.label[agType].color;
  }};
  cursor: inherit;
  margin-bottom: 0px;
  word-wrap: break-word;
`;

export default AgroLabel;