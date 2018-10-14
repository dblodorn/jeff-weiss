import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { setMenuState } from './../../state/actions'
import { flexColumn, mainPadding, media, flexRowCenteredVert } from '../../styles/mixins'
import Menu from './../menus/Menu'
import { heights, colors, spacing, widths } from './../../styles/theme.json'

const Footer = (props) =>
  <Transition from={{ opacity: 0, transform: `translateY(${heights.footer})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateY(${heights.footer})`, pointerEvents: 'none' }}>
    {props.footer_state && (styles => 
      <FooterWrapper style={styles} className={props.orientation}>
        <Menu location={1} navLocation={'footer'} orientation={props.orientation}/>
      </FooterWrapper>
    )}
  </Transition>

export default connect(
  state => ({
    footer_state: state.header_state,
    header_style: state.header_style
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(Footer)

// STYLES
const FooterWrapper =  styled.footer`
  ${flexColumn};
  ${mainPadding};
  border-top: 1px solid ${colors.black};
  justify-content: center;
  width: 100vw;
  z-index: 100;
  padding-bottom: ${spacing.big_pad};
  background-color: ${colors.black};
  position: relative;
  * {
    color: ${colors.white};
  }
  ${media.desktopNav`
    ${flexRowCenteredVert};
    height: ${heights.footer};
    position: fixed;
    bottom: 0;
    left: 0;
    ${mainPadding};
    background-color: ${colors.footer_bg_color}; 
    * {
      color: ${colors.footer_type_color}!important;
    }
  `}
  &.sidebar {
    ${media.desktopNav`
      padding-left: calc(${widths.sidebar_desktop} + ${spacing.double_pad});
      justify-content: flex-end;
    `}
  }
`
