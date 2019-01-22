import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { buttonInit, opacityTransition, media } from './../../styles/mixins'

class BackArrow extends Component {
  render() {
    return (
      <BackButton onClick={this.context.router.history.goBack} size={'2.5rem'}>
        <svg height={`100%`} width={`100%`} version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
          <g fill="#fff" stroke="#fff" strokeLinecap="square" strokeWidth="3" transform="translate(0.5 0.5)">
            <line fill="none" strokeLinecap="butt" x1="46" x2="3" y1="24" y2="24" />
            <polyline fill="none" points="17,10 3,24 17,38 " stroke="#fff" />
          </g>
        </svg>
      </BackButton>
    )
  }
}

BackArrow.contextTypes = {
  router: propTypes.object
}

export default BackArrow

const BackButton = styled.button`
  ${buttonInit};
  ${opacityTransition};
  width: ${props => props.size};
  height: ${props => props.size};
  position: fixed;
  top: 1.55rem;
  left: 1.25rem;
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  opacity: 1;
  svg {
    width: 100%;
    height: 100%;
  }
  ${media.desktopNav`
    opacity: .5;
    top: 1rem;
    left: 1rem;
    &:hover {
      opacity: 1;
    }
  `}
`