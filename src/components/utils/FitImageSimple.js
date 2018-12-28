import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { absoluteCentered } from './../../styles/mixins'

export default props => {
  const [loaded, isLoaded] = useState(false)
  return (
    <ImgWrapper alpha={loaded ? 1 : 0}>
      <ImgFit src={props.src} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'} />
    </ImgWrapper>
  )
}

const ImgWrapper = styled.div`
  ${absoluteCentered};
  transition: opacity 250ms ease-in-out;
  opacity: ${props => props.alpha};
  width: 100%;
  height: 100%;
  will-change: opacity;
  overflow: hidden;
`

const ImgFit = styled.img`
  ${absoluteCentered};
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
`
