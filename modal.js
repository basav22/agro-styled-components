// @ts-check

import styled from "styled-components";
import { AgroHeading } from "./heading";
import { AgroLabel } from "./labels";

export const ModalHeading = AgroHeading.extend`
  font-size: ${props => props.theme.body.fonts.lg};
`;

export const ModalSubHeading = AgroLabel.extend`
  font-size: ${props => props.theme.body.fonts.md};
`;

export default {
  ModalHeading,
  ModalSubHeading
};
