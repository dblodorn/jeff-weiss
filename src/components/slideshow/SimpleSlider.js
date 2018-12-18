import React, { useState, Fragment } from 'react'
import styled, { css } from 'styled-components'
import posed from 'react-pose'
import { absoluteTopFull, absoluteCentered, flexCenteredAll, buttonInit } from './../../styles/mixins'
import { colors, fonts } from './../../styles/theme.json'
import { PrevButton, NextButton } from './../utils/PrevNextButton'
import TextOverlay from './../TextOverlay'

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Slide = props =>
  <SlideWrap className={props.active && 'active'}>
    {(props.caption) && <TextOverlay content={`<h2>${props.slideData.image.description.title}</h2><br><p>${props.slideData.image.description.caption}</p>`} /> }
    <SlideWrapper>
      <ImgFit src={props.slideData.image.large} />
    </SlideWrapper>
  </SlideWrap>

export default props => {
  const [index, setIndex] = useState(0)
  const slide_length = props.slides.length

  const prev = () =>
    (index === 0) ? setIndex(slide_length - 1) : setIndex(index - 1)

  const next = () =>
    (index === (slide_length - 1)) ? setIndex(0) : setIndex(index + 1)

  const prevSlide = () =>
    (index === 0) ? slide_length - 1 : index - 1

  const nextSlide = () =>
    (index === (slide_length - 1)) ? 0 : index + 1

  console.log(index, slide_length)
  console.log('prev:: ', prevSlide())
  console.log('next:: ', nextSlide())

  return (
    <SliderWrapper>
      <ButtonLeft onClick={() => prev()}><PrevButton/></ButtonLeft>
      <ButtonRight onClick={() => next()}><NextButton/></ButtonRight>
      <Pagination>{`${index + 1} / ${slide_length}`}</Pagination>
      <InnerSlide>
        <Slide slideData={props.slides[prevSlide()]} caption={props.caption} active={false}/>
        <Slide slideData={props.slides[index]} caption={props.caption} active={true}/>
        <Slide slideData={props.slides[nextSlide()]} caption={props.caption} active={false}/>
      </InnerSlide>
    </SliderWrapper>
  )
}


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

const SlideWrap = styled.div`
  opacity: 0;
  &.active {
    opacity: 1;
  }
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
  font-family: ${fonts.body_copy_font_a};
  font-size: ${fonts.sizes.micro};
`

const ImgFit = styled.img`
  ${absoluteCentered};
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
`

const InnerSlide = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100vw;
  position: relative;
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  z-index: 50;
  pointer-events: none;
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`