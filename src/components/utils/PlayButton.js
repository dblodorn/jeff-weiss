import React from 'react'
import styled from 'styled-components'
import { absoluteCentered, absoluteTopFull, buttonInit } from './../../styles/mixins'
import { colors } from './../../styles/theme.json'

export default (props) =>
  <PlayButton onClick={props.clickFunction}>
    <PlayButtonWrapper className={'button'}>
      <svg version="1.1" viewBox="0 0 48 48" width="48" height="48"><title>📹</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" fill={props.color} stroke={props.color}><polygon fill="none" stroke={props.color} strokeMiterlimit="10" points="11,44 11,4 41,24 "></polygon></g></svg>
    </PlayButtonWrapper>
  </PlayButton>

const PlayButtonWrapper = styled.div`
  ${absoluteCentered};
  width: 15%;
  height: 15%;
  padding: 1px;
  margin: auto;
  pointer-events: none;
  display: block;
  z-index: 100;
  transition: opacity 100ms ease-in-out;
  will-change: opacity;
  opacity: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`

const PlayButton = styled.button`
  ${absoluteTopFull};
  ${buttonInit};
  z-index: 9000;
  cursor: pointer;
  &:hover {
    .button {
      opacity: 1;
    }
  }
`
