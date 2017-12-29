// @ts-check

import styled from 'styled-components';

/////////////////////////////////////////////
////////// NOT BUNDLED with agrostar-styled-components ////////
/////////////////////////////////////////////
export const IconWrapper = styled.span`
    margin-right: .5em;
    font-size: ${props => props.iconSize ? props.theme.body.fonts[props.iconSize] : "auto" };
    color: ${props => props.iconType ? props.theme.label[props.iconType].color : "inherit"};
`;