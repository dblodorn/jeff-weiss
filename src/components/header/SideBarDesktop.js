import React from 'react'
import { connect } from 'react-redux'
import { setHeaderState, setRandomColor } from './../../state/actions'
import { SidebarNav } from './../../styles/components'
import Dots from './Dots'

const SidebarDesktop = (props) => {
  const clickHandler = () => {
    props.header_toggle(true)
    props.color()
  }
  return (
    <SidebarNav onClick={() => clickHandler()} className={props.header_state && `hide`}>
      <Dots/>
    </SidebarNav>
  )
}

export default connect(
  state => ({
    header_state: state.header_state,
    direction: state.scroll_direction,
    page: state.page
  }),
  dispatch => ({
    color: () => dispatch(setRandomColor()),
    header_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(SidebarDesktop)
