import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { flexRowCenteredAll, mainPadding, absoluteTopFull, flexCenteredAll, opacityTransition, flexColumn } from './../../styles/mixins'
import { H1, H4, P, SmallP } from './../../styles/components'
import FitImage from '../utils/FitImage'
import { breakpoints, shared, colors, heights } from './../../styles/theme.json'

const Caption = (props) =>
  <CaptionWrapper>
    <H4>{props.caption.title}</H4>
    <SmallP>{props.caption.description}</SmallP>
  </CaptionWrapper>  

const CarouselSlide = (props) => {
  return (
    <InnerSlide className={`${props.slideData.slide_type}-slide`}>
      {(props.caption) && <Caption caption={props.slideData.image.description}/>}
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
const CaptionWrapper = styled.div`
  ${opacityTransition};
  ${mainPadding};
  ${flexColumn};
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  cursor: pointer;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.80) 100%);
  position: absolute;
  bottom: ${heights.footer};
  left: 0;
  opacity: 0;
  z-index: 1000;
  &:hover {
    opacity: 1;
  }
  * {
    color: ${colors.white}
  }
  p {
    
  }
`

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
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  z-index: 50;
  pointer-events: none;
  border-right: ${shared.border_thin};
  border-left: ${shared.border_thin};
`
