import React from 'react'
import { connect } from 'react-redux'
import { breakpoints } from './../styles/theme.json'

const ResponsiveWrapper = props => {
  if (props.resizeState.window_width >= breakpoints.desktop) {
    return <React.Fragment>{props.desktop}</React.Fragment>
  } else {
    return <React.Fragment>{props.mobile}</React.Fragment>
  }
}

export default connect(
  state => ({
    resizeState: state.resize_state
  })
)(ResponsiveWrapper)