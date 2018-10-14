import React, { Fragment } from 'react'
import withStore from '../HOC/withStore'
import HeaderDesk from './HeaderDesk'
import HeaderMobile from './HeaderMobile'
import { breakpoints } from './../../styles/theme.json'

export default withStore((props) =>
  <Fragment>
    {
      (props.resize_state.window_width >= breakpoints.desktop)
      ? <HeaderDesk/>
      : <HeaderMobile/>
    }
  </Fragment>
)
