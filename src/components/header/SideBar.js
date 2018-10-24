import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setHeaderState } from './../../state/actions'
import { flexCenteredAll, opacityTransition, buttonInit } from './../../styles/mixins'

const Dots = (props) =>
  <svg height={props.height || '32px'} width={props.width || '32px'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>menu dots</title>
    <g fill="#0a0a0a">
      <circle cx="16" cy="4" fill="#0a0a0a" r="3" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="28" fill="#0a0a0a" r="3" />
    </g>
  </svg>

const Sidebar = (props) =>
  <SidebarNav onClick={() => props.header_toggle(true)}>
    <Dots/>
  </SidebarNav>

export default connect(
  state => ({
    header_state: state.header_state,
    direction: state.scroll_direction,
    page: state.page
  }),
  dispatch => ({
    header_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(Sidebar)

//STYLES
const SidebarNav = styled.button`
  ${buttonInit};
  ${flexCenteredAll};
  ${opacityTransition};
  position: fixed;
  top: 0;
  right: 0;
  width: 3.5rem;
  height: 4.5rem;
  opacity: .25;
  cursor: pointer;
  z-index: 8000;
  &:hover {
    opacity: 1;
  }
`

