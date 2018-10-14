import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { animationRotate, absoluteCentered } from './../../styles/mixins'
import { colors } from './../../styles/theme.json'

const Spinner = (props) => 
  <SpinnerWrap size={props.size || '3.5rem'}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" width="32" height="32">
      <g className="nc-icon-wrapper" fill={props.color || colors.black}>
        <g className="nc-loop_circle-04-32">
          <path data-cap="butt" fill="none" stroke={props.color || colors.black} strokeWidth={`${props.stroke}` || `2`} strokeMiterlimit="10" d="M2.30867,22.13668 C1.46776,20.26345,1,18.18635,1,16C1,7.71573,7.71573,1,16,1s15,6.71573,15,15s-6.71573,15-15,15 c-3.61453,0-6.93046-1.27847-9.52027-3.40787" transform="rotate(234.13100000005215 16 16)" strokeLinecap="butt" strokeLinejoin="miter"></path>
        </g>
      </g>
    </svg>
  </SpinnerWrap>

Spinner.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
  stroke: propTypes.number
}

export default Spinner

// STYLES
const SpinnerWrap = styled.div`
  ${animationRotate};
  ${absoluteCentered};
  width: ${props => props.size};
  height: ${props => props.size};
  svg {
    width: 100%;
    height: 100%;
  }
`
