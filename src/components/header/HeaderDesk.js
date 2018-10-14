import React from 'react'
import { connect } from 'react-redux'
import { setMenuState } from './../../state/actions'
import HeaderHorizontal from './HeaderHorizontal'
import HeaderSidebar from './HeaderSidebar'

const HeaderDesk = (props) => {
  if (props.style === 'top-horizontal') {
    return <HeaderHorizontal header_state={props.header_state} orientation={props.style}/>
  } else if (props.style === 'sidebar') {
    return <HeaderSidebar header_state={props.header_state} orientation={props.style}/>
  } else if (props.style === 'pop-out') {
    return <HeaderSidebar header_state={props.header_state} orientation={props.style}/>
  } else {
    return <HeaderHorizontal header_state={props.header_state} orientation={props.style}/>
  }
}

export default connect(
  state => ({
    header_state: state.header_state,
    style: state.header_style
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderDesk)
