import React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { themeA, themes } from "./../../../styles/theme";
import {
  bigType,
  flexColumn,
  media,
  opacityTransition
} from "./../../../styles/mixins";
import { spacing, shared, widths } from "./../../../styles/theme.json";

export default props => (
  <CardWrapper className={`${props.columns} ${props.style}`}>
    <CardLink to={props.cardData.post_type === "page" ? `/${props.cardData.slug}` : `/${props.slug}/${props.cardData.slug}`}>
      <ThemeProvider theme={themes[props.theme] || themeA}>
        <ProjectTitle>{props.cardData.title}</ProjectTitle>
      </ThemeProvider>
    </CardLink>
  </CardWrapper>
);

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  position: relative;
`;

const CardLink = styled(Link)`
  text-decoration: none !important;
  * {
    text-decoration: none !important;
  }
`;

const ProjectTitle = styled.h3`
  ${bigType};
  ${opacityTransition};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
  text-transform: ${props => props.theme.display_case};
  background-color: ${props => props.theme.top_bg_color};
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  opacity: .5;
  &:hover {
    opacity: 1;
  }
`;
