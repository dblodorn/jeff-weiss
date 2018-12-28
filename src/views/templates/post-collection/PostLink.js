import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bigType, flexColumn, media, colorTransition } from "./../../../styles/mixins";
import { spacing, colors } from "./../../../styles/theme.json";

const PostLink = props =>
  <CardWrapper className={`${props.columns} ${props.style}`}>
    <CardLink to={props.cardData.post_type === "page" ? `/${props.cardData.slug}` : `/${props.slug}/${props.cardData.slug}`}>
      <ProjectTitle color={props.color} font={props.font} dangerouslySetInnerHTML={{ __html: props.cardData.title }}/>
    </CardLink>
  </CardWrapper>

export default connect(
  state => ({
    font: state.fonts.project_nav,
    color: state.color.reverse
  })
)(PostLink)

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
  ${colorTransition};
  color: ${colors.white};
  font-family: ${props => props.font};
  text-transform: uppercase;
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  ${media.desktopNav`
    &:hover {
      color: ${props => props.color};
    }
  `}
`;
