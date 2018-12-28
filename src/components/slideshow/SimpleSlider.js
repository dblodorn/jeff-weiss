import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'
import { absoluteTopFull, absoluteCentered, flexCenteredAll, buttonInit, animationFadeOut, animationFadeIn } from './../../styles/mixins'
import { colors, fonts } from './../../styles/theme.json'
import { PrevButton, NextButton } from './../utils/PrevNextButton'
import TextOverlay from './../TextOverlay'
import FitImageSimple from './../utils/FitImageSimple'

mixin(_, {
  debounce: debounce
})

const transition = 1500

const Slide = props =>
  <SlideWrap className={props.class}>
    {(props.caption) && <TextOverlay content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`} /> }
    <SlideWrapper>
      <ImgFit src={props.slideData.image.large} />
    </SlideWrapper>
  </SlideWrap>

const SimpleSlider = props => {
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(0)
  const slide_length = props.slides.length
  
  const nextHandler = () => {
    setActive(1)
    setTimeout(() => {
      setActive(0)
    }, transition)
    if (index === (slide_length - 1)) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const prevHandler = () => {
    setActive(2)
    setTimeout(() => {
      setActive(0)
    }, transition)
    if (index === 0) {
      setIndex(slide_length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const prevSlide = () => (index === 0) ? slide_length - 1 : index - 1
  const nextSlide = () => (index === (slide_length - 1)) ? 0 : index + 1

  return (
    <SliderWrapper>
      <ButtonLeft onClick={() => prevHandler()}><PrevButton/></ButtonLeft>
      <ButtonRight onClick={() => nextHandler()}><NextButton/></ButtonRight>
      <InnerSlide>
        {(active === 2) && <Slide slideData={props.slides[nextSlide()]} caption={props.caption} class={`next`} />}
        {(active === 2) && <Slide slideData={props.slides[index]} caption={props.caption} class={`current`} />}
        {(active === 1) && <Slide slideData={props.slides[prevSlide()]} caption={props.caption} class={`next`} />}
        {(active === 1) && <Slide slideData={props.slides[index]} caption={props.caption} class={`current`} />}
        {(active === 0) && <Slide slideData={props.slides[index]} caption={props.caption} />}
      </InnerSlide>
      <Preload>
        <img src={props.slides[prevSlide()].image.large}/>
        <img src={props.slides[nextSlide()].image.large}/>
      </Preload>
      <Pagination font={props.font}>{`${index + 1} / ${slide_length}`}</Pagination>
    </SliderWrapper>
  )
}

export default connect(
  state => ({
    font: state.fonts.top_menu
  })
)(SimpleSlider)

// Styles
const buttonWrap = css`
  ${buttonInit};
  padding: 0;
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 9000;
`

const ButtonLeft = styled.button`
  ${buttonWrap};
  ${flexCenteredAll};
  left: .5rem;
`

const Preload = styled.div`
  display: none;
  position: fixed;
  top: -500;
  left: -500;
  width: 0;
  height: 0;
  overflow: hidden;
`

const ButtonRight = styled.button`
  ${buttonWrap};
  ${flexCenteredAll};
  right: .5rem;
`

const SliderWrapper = styled.div`
  ${flexCenteredAll};
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`

const Pagination = styled.div`
  bottom: 1.25rem;
  width: 100%;
  text-align: center;
  pointer-events: none;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  color: ${colors.white};
  font-family: ${props => props.font};
  font-size: ${fonts.sizes.micro};
`

const InnerSlide = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100vw;
  position: relative;
`

// SLIDE
const SlideWrap = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100vw;
  z-index: 0;
  &.current {
    ${animationFadeIn(transition, 0)};
    z-index: 90;
  }
  &.next {
    ${animationFadeOut(transition)};
    z-index: 100;
  }
`

const ImgFit = styled.img`
  ${absoluteCentered};
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  z-index: 50;
  pointer-events: none;
`
