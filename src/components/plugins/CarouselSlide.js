import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { flexRowCenteredAll, mainPadding, absoluteTopFull, flexCenteredAll, opacityTransition, flexColumn } from './../../styles/mixins'
import { H1 } from './../../styles/components'
import FitImage from '../utils/FitImage'
import { breakpoints, colors, heights } from './../../styles/theme.json'
import TextOverlay from './../../views/templates/flexible-image-gallery/TextOverlay'

const CarouselSlide = (props) => {
  return (
    <InnerSlide className={`${props.slideData.slide_type}-slide`}>
      {(props.caption) &&
        <TextOverlay content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`}/>
      }
      <SlideWrapper>
        {(props.slideData.slide_type == 'image')
          ? <FitImage src={(props.window_width >= breakpoints.medium) ? props.slideData.image.large : props.slideData.image.medium} fit={props.slideData.image_style}/> :
          (props.slideData.slide_type == 'text')
          ? <ThemeProvider theme={themes[props.slideData.theme] || themeA}>
              <TextCard bg_color={props.slideData.bg_color} text_color={props.slideData.text_color}>
                <H1>{props.slideData.text}</H1>
              </TextCard>
            </ThemeProvider>
          : null
        }
        {props.children}
      </SlideWrapper>
    </InnerSlide>
  )
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width
  })
)(CarouselSlide)

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
