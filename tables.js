// @ts-check

import styled from "styled-components";
import { AgroList } from "./lists";

export const AgroTable = AgroList.extend`margin: 0;`;

export const AgroTableRow = styled.li`
  display: flex;
  align-items: center;
  font-weight: ${props => (props.bold ? "bold" : "inherit")};
  padding-bottom: 1em;
  margin-top: 0.5em;
  border-bottom: 1px solid ${props => props.theme.label.fainted.color};
`;

export const TableItem = styled.div`
  flex: ${props => (props.agSize ? props.agSize : 1)};
`;

export const AgroTableItem = TableItem;