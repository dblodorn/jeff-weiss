import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Menu from './../menus/Menu'
import MenuLink from './../menus/MenuLink'
import { Transition } from 'react-spring'
import { setMenuState } from './../../state/actions'
import { SidebarNav } from '../../styles/components'
import { flexColumn, scrollPanel, flexRowCenteredVert, opacityTransition  } from './../../styles/mixins'
import { spacing, colors, heights } from './../../styles/theme.json'
import Close from './../utils/Close'
import Logo from './Logo'
import Dots from './Dots'

const MenuWrapper = (props) =>
  <InnerHeader style={props.style} className="nav-wrapper__content">
    <CloseWrapper>
      <Close clickFunction={props.clickFunction} color={colors.white} size={`4rem`} stroke={3} top={`auto`} position={`relative`} />
    </CloseWrapper>
    <Menu location={0}>
      <MenuLink page={'Home'} path={''}/>
    </Menu>
  </InnerHeader>

const HeaderMobile = (props) => {
  return (
    <Fragment>
      <HeaderWrapper>
        <LogoWrapper className={!props.header_state && `hide` }>
          <Logo/>
        </LogoWrapper>
        <Transition from={{ opacity: 0, transform: 'scale(1.025)' }} enter={{ opacity: 1, transform: 'scale(1)' }} leave={{ opacity: 0, transform: 'scale(1.05)', pointerEvents: 'none' }}>
          {props.menu_state && (styles => <MenuWrapper style={styles} clickFunction={() => props.menu_toggle(false)}/>)}
        </Transition>
      </HeaderWrapper>
      <SidebarNav onClick={() => props.menu_toggle(true)} className={props.menu_state && `hide`}>
        <Dots />
      </SidebarNav>
    </Fragment>
  )
}

export default connect(
  state => ({
    menu_state: state.menu,
    header_state: state.header_state,
    direction: state.scroll_direction,
    route: state.router.location.pathname
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderMobile)

/* STYLES */
const LogoWrapper = styled.div`
  ${opacityTransition};
  display: block;
  opacity: 1;
  &.hide {
    opacity: 0;
    pointer-events: none;
  }
`

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 0;
  padding: 0 ${spacing.double_pad};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  transition: opacity 750ms ease, transform 350ms ease;
  opacity: ${props => props.Opacity};
  transform: translateY(${props => props.Yposition});
  * {
    color: ${colors.header_type_color}!important;
  }
`

const InnerHeader = styled.div`
  ${flexColumn};
  ${scrollPanel};
  background-color: ${colors.white};
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: calc(${spacing.double_pad} * 4) calc(${spacing.double_pad} * 2);
  background-color: ${colors.header_bg_color};
  will-change: opacity, transform;
  zoom: 0;
`

const CloseWrapper = styled.div`
  ${flexRowCenteredVert};
  justify-content: flex-end;
  width: calc(${heights.header} - .5rem);
  height: ${heights.header};
  opacity: 1;
  position: fixed;
  top: .75rem;
  right: .5rem;
`
