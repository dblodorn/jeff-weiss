import React from 'react'
import styled from 'styled-components'
import { absoluteCentered, absoluteTopFull, flexCenteredAll } from './../../styles/mixins'
import { heights } from './../../styles/theme.json'
import TextOverlay from './../TextOverlay'

export default props =>
  <InnerSlide className={`${props.slideData.slide_type}-slide`}>
    {(props.caption) && <TextOverlay content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`}/>}
    <SlideWrapper>{props.children}</SlideWrapper>
  </InnerSlide>

// STYLES
const InnerSlide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: ${heights.header};
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  z-index: 50;
  pointer-events: none;
`
