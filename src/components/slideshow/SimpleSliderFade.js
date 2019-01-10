import React, { useState, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'
import { absoluteTopFull, absoluteCentered, flexCenteredAll, buttonInit, animationFadeOut, animationFadeIn, media } from './../../styles/mixins'
import { colors, fonts } from './../../styles/theme.json'
import { PrevButton, NextButton } from './../utils/PrevNextButton'
import TextOverlay from './../TextOverlay'

mixin(_, {
  debounce: debounce
})

const transition = 1500

const Slide = props => {
  return (
    <SlideWrap className={props.class}>
      {(props.caption) && <TextOverlay content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`} /> }
      <SlideWrapper>
        <ImgFit src={props.slideData.image.large} />
      </SlideWrapper>
    </SlideWrap>
  )
}

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

  console.log(props)

  return (
    <SliderWrapper>
      {(props.slides.length > 1)
        ? <Fragment>
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
    font: state.fonts.top_menu
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
  bottom: 3.5rem;
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
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`

const Pagination = styled.div`
  bottom: 4rem;
  width: 100%;
  text-align: center;
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
  height: 100vh;
  position: relative;
`

// SLIDE
const SlideWrap = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100vh;
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
  padding-bottom: 10rem;
  ${media.desktopNav`
    padding: 8rem;
  `}
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  z-index: 50;
  pointer-events: none;
`
