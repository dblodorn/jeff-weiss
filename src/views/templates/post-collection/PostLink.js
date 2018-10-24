import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bigType, flexColumn, opacityTransition } from "./../../../styles/mixins";
import { spacing, colors, fonts } from "./../../../styles/theme.json";

export default props => (
  <CardWrapper className={`${props.columns} ${props.style}`}>
    <CardLink to={props.cardData.post_type === "page" ? `/${props.cardData.slug}` : `/${props.slug}/${props.cardData.slug}`}>
      <ProjectTitle dangerouslySetInnerHTML={{ __html: props.cardData.title }}/>
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
  color: ${colors.white};
  font-family: ${fonts.display_font_b};
  text-transform: uppercase;
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  opacity: .5;
  &:hover {
    opacity: 1;
  }
`;
