import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export default props => {
  const [loaded, isLoaded] = useState(false)
  return (
    <ImgWrapper alpha={loaded ? 1 : 0}>
      <ImgFit width={props.src.size.w} height={props.src.size.h} src={props.src.small} srcSet={`${props.src.small} 300w, ${props.src.medium} 768w, ${props.src.medium} 1280w, ${props.src.xlarge} 3200w`} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'} />
    </ImgWrapper>
  )
}

const sharedRules = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImgWrapper = styled.div`
  ${sharedRules};
  opacity: ${props => props.alpha};
  width: 100%;
  height: 100%;
  transition: opacity 250ms ease-in-out;
  will-change: opacity;
  overflow: hidden;
`

const ImgFit = styled.img`
  ${sharedRules};
  object-fit: ${props => props.fit};
  bottom: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
`
