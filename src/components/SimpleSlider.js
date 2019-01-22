import React, { useState, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { absoluteTopFull, absoluteCentered, flexCenteredAll, buttonInit, animationFadeOut, animationFadeIn, media } from './../styles/mixins'
import { colors, fonts } from './../styles/theme.json'
import { PrevButton, NextButton } from './utils/PrevNextButton'
import TextOverlay from './TextOverlay'
import FitImage from './utils/FitImage'

const Slide = props => {
  return (
    <SlideWrap className={props.class}>
      {(props.caption) && <TextOverlay slideshow={(props.slides.length > 1) && `multi-slideshow`} content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`} /> }
      <SlideWrapper>
        <FitImage src={props.slideData.image.large} fit={'contain'} />
      </SlideWrapper>
    </SlideWrap>
  )
}

const SimpleSlider = props => {
  const [index, setIndex] = useState(0)
  const slide_length = props.slides.length
  
  const nextHandler = () => {
    if (index === (slide_length - 1)) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const prevHandler = () => {
    if (index === 0) {
      setIndex(slide_length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const prevSlide = () => (index === 0) ? slide_length - 1 : index - 1
  const nextSlide = () => (index === (slide_length - 1)) ? 0 : index + 1

  return (
    <SliderWrapper wh={props.wh}>
      {(props.slides.length > 1)
        ? <Fragment>
            <ButtonLeft onClick={() => prevHandler()}><PrevButton/></ButtonLeft>
            <ButtonRight onClick={() => nextHandler()}><NextButton/></ButtonRight>
            <InnerSlide>
            <Slide slideData={props.slides[index]} caption={props.captions} slides={props.slides.length}/>
            </InnerSlide>
            <Preload>
              <img src={props.slides[prevSlide()].image.large}/>
              <img src={props.slides[nextSlide()].image.large}/>
            </Preload>
            <Pagination font={props.font}><span>{`${index + 1} / ${slide_length}`}</span></Pagination>
          </Fragment>
        : <InnerSlide>
            <Slide slideData={props.slides[0]} caption={props.caption} class={`current`} />
          </InnerSlide>
      }
    </SliderWrapper>
  )
}

export default connect(
  state => ({
    font: state.fonts.top_menu,
    wh: state.resize_state.window_height
  })
)(SimpleSlider)

// Styles
const Preload = styled.div`
  display: none;
  position: fixed;
  top: -500;
  left: -500;
  width: 0;
  height: 0;
  overflow: hidden;
`

const buttonWrap = css`
  ${buttonInit};
  padding: 0;
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 2rem;
  margin: auto;
  z-index: 9000;
  ${media.desktopNav`
    top: 0;
    bottom: 0;
  `}
`

const ButtonRight = styled.button`
  ${buttonWrap};
  ${flexCenteredAll};
  right: .5rem;
`

const ButtonLeft = styled.button`
  ${buttonWrap};
  ${flexCenteredAll};
  left: .5rem;
`

const SliderWrapper = styled.div`
  ${flexCenteredAll};
  top: 0;
  left: 0;
  position: fixed;
  height: ${props => props.wh}px;
  width: 100vw;
  overflow: hidden;
  ${media.desktopNav`
    height: 100vh;
  `}
`

const Pagination = styled.div`
  bottom: 3rem;
  width: 100%;
  text-align: center;
  ${flexCenteredAll};
  pointer-events: none;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  color: ${colors.white};
  font-family: ${props => props.font};
  font-size: ${fonts.sizes.micro};
  ${media.desktopNav`
    bottom: 1.25rem;
  `}
`

const InnerSlide = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100%;
`

// SLIDE
const SlideWrap = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100%;
  padding-bottom: 8rem;
  z-index: 0;
  &.current {
    z-index: 90;
  }
  &.next {
    z-index: 100;
  }
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  z-index: 50;
  pointer-events: none;
`
