import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import HeaderHorizontal from './HeaderHorizontal'
import HeaderMobile from './HeaderMobile'
import { breakpoints } from './../../styles/theme.json'

const Header = props =>
  <Fragment>
    {(props.resize_state.window_width >= breakpoints.desktop)
      ? <HeaderHorizontal/>
      : <HeaderMobile/>
    }
  </Fragment>

export default connect(
  state => ({
    resize_state: state.resize_state,
    header_state: state.header_state,
  })
)(Header)

