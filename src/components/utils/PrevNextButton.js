import React from 'react'
import styled from 'styled-components'
import { opacityTransition, buttonInit } from '../../styles/mixins'
import { colors } from './../../styles/theme.json'

const Button = styled.div`
  ${buttonInit};
  width: 4rem;
  height: 6rem;
  &:hover {
    svg {
      opacity: .75;
    }
  }
  svg {
    ${opacityTransition};
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: ${colors.overlay};
  }
`

const NextButton = (props) =>
  <Button>
    <svg version="1.1" viewBox="0 0 64 64" width="64" height="64"><title>minimal right</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" transform="translate(0.5 0.5)" fill="#180c06" stroke="#180c06"><polyline fill="none" stroke="#180c06" strokeMiterlimit="10" points="18,4 46,32 18,60 "></polyline></g></svg>
  </Button>

const PrevButton = (props) =>
  <Button>
  <svg version="1.1" viewBox="0 0 64 64" width="64" height="64"><title>minimal left</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" transform="translate(0.5 0.5)" fill="#180c06" stroke="#180c06"><polyline fill="none" stroke="#180c06" strokeMiterlimit="10" points="46,60 18,32 46,4 "></polyline></g></svg>
  </Button>

export {
  NextButton,
  PrevButton
}