import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setHeaderState } from './../../state/actions'
import { flexRow, navWrapperHorizontal } from '../../styles/mixins'
import { CloseWrapper } from '../../styles/components'
import { heights, colors } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Menu from '../menus/Menu'
import Logo from './Logo'
import Close from './../utils/Close'

const HeaderHorizontal = (props) =>
  <HeaderWrapper className={[
      !props.header_state ? `hide` : ``,
      (props.direction === 'down') ? `scrolling` : ``
    ].join(' ')} bgcolor={props.color.dark}>
    <Logo theme={'a'} title={meta_defaults.title}/>
    <RightArea>
      <Menu location={0} orientation={props.orientation} navLocation={'header'}/>
      <CloseWrapper>
        <Close clickFunction={() => props.menu_toggle(false)} color={colors.white} size={`2.5rem`} stroke={3} top={`auto`} position={`relative`}/>
      </CloseWrapper>
    </RightArea>
  </HeaderWrapper>

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
  &.hide {
    opacity: 0;
    transform: translateY(-${heights.header});
  }
  transition: background-color 1000ms ease-in-out, transform 300ms ease-in-out, opacity 300ms ease-in-out;
  will-change: background-color, transform, opacity;
  background-color: ${props => props.bgcolor};
  &.scrolling {
    opacity: 0;
    transform: translateY(-${heights.header});
  }
`

const RightArea = styled.div`
  ${flexRow};
  height: ${heights.header};
`
