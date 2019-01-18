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
          ? <ImgFit width={props.src.size.w} height={props.src.size.h} src={props.src.small} srcSet={`${props.src.small} 300w, ${props.src.medium} 768w, ${props.src.medium} 1280w, ${props.src.large} 3200w`} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'} />
          : <ImgFit src={props.src} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'} />
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

const sharedRules = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  ${sharedRules};
`

const ImgWrapper = styled.div`
  ${sharedRules};
  opacity: ${props => props.alpha};
  width: 100%;
  height: 100%;
  transition: opacity 250ms ease-in-out;
  will-change: opacity;
  overflow: hidden;
  &.hover {
    cursor: pointer;
    &:hover {
      img {
        opacity: .75;
      }
    }
  }
`

const ImgFit = styled.img`
  ${sharedRules};
  object-fit: ${props => props.fit};
  bottom: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  padding: 0;
  ${media.desktopNav`
    padding: ${heights.header};
  `}
`
