import React from 'react'
import styled from 'styled-components'
import { opacityTransition, buttonInit, media } from '../../styles/mixins'
import { colors } from './../../styles/theme.json'

const Button = styled.div`
  ${buttonInit};
  width: 2.75rem;
  height: 2.75rem;
  &:hover {
    svg {
      opacity: 1;
    }
  }
  svg {
    ${opacityTransition};
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: ${colors.white};
    ${media.desktopNav`
      opacity: .75;
    `}
  }
`

const NextButton = (props) =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64"><title>minimal right</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" transform="translate(0.5 0.5)" fill="#fff" stroke="#fff"><polyline fill="none" stroke="#fff" strokeMiterlimit="10" points="18,4 46,32 18,60 "></polyline></g></svg>
  </Button>

const PrevButton = (props) =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64"><title>minimal left</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" transform="translate(0.5 0.5)" fill="#fff" stroke="#fff"><polyline fill="none" stroke="#fff" strokeMiterlimit="10" points="46,60 18,32 46,4 "></polyline></g></svg>
  </Button>

export {
  NextButton,
  PrevButton
}