import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setHeaderState } from './../../state/actions'
import { flexCenteredAll, opacityTransition, buttonInit, menuTransition } from './../../styles/mixins'

const Dots = (props) =>
  <svg height={props.height || '32px'} width={props.width || '32px'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>menu dots</title>
    <g fill="#ffffff">
      <circle cx="16" cy="4" fill="#ffffff" r="3" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="28" fill="#ffffff" r="3" />
    </g>
  </svg>

const Sidebar = (props) =>
  <SidebarNav onClick={() => props.header_toggle(true)} className={props.header_state && `hide`}>
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
  ${menuTransition};
  position: fixed;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4.5rem;
  opacity: .65;
  cursor: pointer;
  z-index: 8000;
  &.hide {
    opacity: 0;
    transform: translateX(4rem);
  }
  &:hover {
    opacity: 1;
  }
`

