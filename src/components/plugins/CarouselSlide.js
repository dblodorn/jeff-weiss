import React from 'react'
import styled from 'styled-components'
import { flexRowCenteredAll, mainPadding, absoluteTopFull, flexCenteredAll } from './../../styles/mixins'
import { H1 } from './../../styles/components'
import FitImageSimple from '../utils/FitImageSimple'
import { heights } from './../../styles/theme.json'
import TextOverlay from './../TextOverlay'

export default props =>
  <InnerSlide className={`${props.slideData.slide_type}-slide`}>
    {(props.caption) &&
      <TextOverlay content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`}/>
    }
    <SlideWrapper>
      {(props.slideData.slide_type == 'image')
        ? <FitImageSimple src={props.slideData.image.large}/> :
        (props.slideData.slide_type == 'text')
        ? <TextCard bg_color={props.slideData.bg_color} text_color={props.slideData.text_color}>
            <H1>{props.slideData.text}</H1>
          </TextCard>
        : null
      }
      {props.children}
    </SlideWrapper>
  </InnerSlide>

// STYLES
const TextCard = styled.div`
  background-color: ${props => props.bg_color};
  ${flexRowCenteredAll};
  ${mainPadding};
  ${absoluteTopFull};
  text-align: center;
  * {
    color: ${props => props.text_color}!important;
  }
`

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
