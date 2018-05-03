// @ts-check

import styled, { css } from "styled-components";
import { AgroList } from "./lists";

export const AgroTable = AgroList.extend`margin: 0;`;

export const AgroTableRow = styled.li`
  display: flex;
  align-items: center;
  font-weight: ${props => (props.bold ? "bold" : "inherit")};
  padding-bottom: 1em;
  padding-top: 1em;
  margin-top: 0.5em;
  border-bottom: 1px solid ${props => props.theme.label.fainted.color};

  ${props => addStickyStyle(props.sticking)}
`;

function addStickyStyle(sticking) {
  if (!sticking) {
    return css``;
  }
  return css`
      position: fixed;
      top: 120px;
      width: 93%;
  `;
}


export const TableContent = styled.div`
  padding-top: 0;
`;

export const TableItem = styled.div`
  flex: ${props => (props.agSize ? props.agSize : 1)};
`;
