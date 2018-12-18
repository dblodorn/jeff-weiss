import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { absoluteTopFull, absoluteCentered, flexCenteredAll, buttonInit } from './../styles/mixins'
import CarouselSlide from './plugins/CarouselSlide'
import { PrevButton, NextButton } from './utils/PrevNextButton'

export default props => {
  const [index, setIndex] = useState(0)
  const slide_length = props.slides.length
  console.log(index)
  
  const prev = () =>
    (index === 0) ? setIndex(slide_length - 1) : setIndex(index - 1)

  const next = () =>
    (index === (slide_length - 1)) ? setIndex(0) : setIndex(index + 1)
    
  return (
    <SliderWrapper>
      <ButtonLeft onClick={() => prev()}><PrevButton/></ButtonLeft>
      <ButtonRight onClick={() => next()}><NextButton/></ButtonRight>
      <CarouselSlide slideData={props.slides[index]} caption={props.captions}>
        <ImgFit src={props.slides[index].image.large}/>
      </CarouselSlide>
      {/*<h1>{`${index} - ${slide_length}`}</h1>*/}
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
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`

const ImgFit = styled.img`
  ${absoluteCentered};
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
`