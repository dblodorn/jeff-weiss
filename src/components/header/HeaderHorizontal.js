import React,  { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setHeaderState } from './../../state/actions'
import { flexRow, navWrapperHorizontal } from '../../styles/mixins'
import { CloseWrapper } from '../../styles/components'
import { heights, colors } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import SidebarDesktop from './SideBarDesktop'
import Menu from '../menus/Menu'
import Logo from './Logo'
import Close from './../utils/Close'

const HeaderHorizontal = (props) =>
  <Fragment>
    <HeaderWrapper className={[
        !props.header_state ? `hide` : ``,
        (props.direction === 'down') ? `scrolling` : ``
      ].join(' ')} bgcolor={props.color.dark}>
      <Logo theme={'a'} title={meta_defaults.title}/>
      <RightArea>
        <Menu location={0} navLocation={'header'}/>
        <CloseWrapper>
          <Close clickFunction={() => props.menu_toggle(false)} color={colors.white} size={`2.5rem`} stroke={3} top={`auto`} position={`relative`}/>
        </CloseWrapper>
      </RightArea>
    </HeaderWrapper>
    <SidebarDesktop/>
  </Fragment>

export default connect(
  state => ({
    header_state: state.header_state,
    direction: state.scroll_direction,
    page: state.page,
    color: state.color
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(HeaderHorizontal)

/* STYLES */
const HeaderWrapper = styled.header`
  ${navWrapperHorizontal};
  top: 0;
  left: 0;
  &:before {
    content: '';
    width: 100vw;
    height: 10rem;
    left: 0;
    background-color: ${props => props.bgcolor};
    transform: translateY(-10rem);
    position: absolute;
    top: 0;
  }
  transition: background-color 1000ms ease-in-out, transform 300ms ease-in-out, opacity 300ms ease-in-out;
  will-change: background-color, transform, opacity;
  background-color: ${props => props.bgcolor};
  &.hide {
    opacity: 0;
    transform: translateY(-${heights.header});
  }
  &.scrolling {
    opacity: 0;
    transform: translateY(-${heights.header});
  }
`

const RightArea = styled.div`
  ${flexRow};
  height: ${heights.header};
`
