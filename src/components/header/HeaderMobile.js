import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Menu from './../menus/Menu'
import MenuLink from './../menus/MenuLink'
import { Transition } from 'react-spring'
import { setHeaderState } from './../../state/actions'
import { flexColumn, scrollPanel, flexRowCenteredVert,  } from './../../styles/mixins'
import { spacing, colors, heights } from './../../styles/theme.json'
import Close from './../utils/Close'

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
    <HeaderWrapper>
      <Transition from={{ opacity: 0, transform: 'scale(1.025)' }} enter={{ opacity: 1, transform: 'scale(1)' }} leave={{ opacity: 0, transform: 'scale(1.05)', pointerEvents: 'none' }}>
        {props.header_state && (styles => <MenuWrapper style={styles} clickFunction={() => props.menu_toggle(false)}/>)}
      </Transition>
    </HeaderWrapper>
  )
}

export default connect(
  state => ({
    header_state: state.header_state
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(HeaderMobile)

/* STYLES */
const HeaderWrapper = styled.header`
  width: 100vw;
  height: 0;
  padding: 0 ${spacing.double_pad} ${spacing.double_pad};
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