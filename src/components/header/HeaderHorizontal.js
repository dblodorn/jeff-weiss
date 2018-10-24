import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { flexRowCenteredVert } from '../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Menu from '../menus/Menu'
import Logo from './Logo'

const HeaderHorizontal = (props) =>
  <HeaderWrapperHorizontal className={(!props.header_state || (props.direction === 'down')) && 'hide'}>
    <Logo theme={'a'} title={meta_defaults.title}/>
    <Menu location={0} orientation={props.orientation} navLocation={'header'}/>
  </HeaderWrapperHorizontal>

export default connect(
  state => ({
    header_state: state.header_state,
    direction: state.scroll_direction,
    page: state.page
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderHorizontal)

/* STYLES */
const HeaderWrapperHorizontal = styled.header`
  width: 100vw;
  ${flexRowCenteredVert};
  height: ${heights.header};
  padding: 0 ${spacing.double_pad};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  background-color: ${colors.header_bg_color};
  transform: translateY(0);
  opacity: 1;
  will-change: transform, opacity;
  transition: transform 300ms ease, opacity 300ms ease;
  * {
    color: ${colors.header_type_color}!important;
  }
  &.hide {
    opacity: 0;
    transform: translateY(-${heights.header});
  }
`
