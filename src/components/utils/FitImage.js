import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import Spinner from './Spinner'
import { heights } from './../../styles/theme.json'
import { media } from './../../styles/mixins'

const FitImage = props => {
  const [loaded, isLoaded] = useState(false)
  return (
    <Wrapper>
      <ImgWrapper alpha={loaded ? 1 : 0} onClick={props.clickFunction} className={(props.clickFunction) && 'hover'}>
        {(props.srcset)
          ? <ImgFit width={props.src.size.w} height={props.src.size.h} src={props.src.small} srcSet={`${props.src.small} 475w, ${props.src.medium} 750w, ${props.src.medium} 1280w, ${props.src.large} 3200w`} onLoad={() => isLoaded(true)} fit={props.fit || 'contain'} />
          : <ImgFit src={props.src} onLoad={() => isLoaded(true)} fit={props.fit || 'contain'} />
        }
      </ImgWrapper>
      {(!loaded) && <Spinner size={'4rem'} color={props.color.dark} stroke={1} />}
    </Wrapper>
  )
}

export default connect(
  state => ({
    color: state.color
  })
)(FitImage)

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  ${media.desktopNav`
    height: 100%;
  `}
`

const ImgWrapper = styled.div`
  position: relative;
  opacity: ${props => props.alpha};
  width: 100%;
  height: 100%;
  transition: opacity 250ms ease-in-out;
  will-change: opacity;
  overflow: hidden;
`

const ImgFit = styled.img`
  object-fit: ${props => props.fit};
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  padding: 6rem 0 11rem;
  ${media.desktopNav`
    padding: calc(${heights.header} + 1.5%);
  `}
`
