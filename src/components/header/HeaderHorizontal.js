import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setHeaderState } from './../../state/actions'
import { flexRowCenteredVert, flexRow, opacityTransition, menuTransition } from '../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Menu from '../menus/Menu'
import Logo from './Logo'
import Close from './../utils/Close'

const HeaderHorizontal = (props) =>
  <HeaderWrapperHorizontal className={!props.header_state && 'hide'}>
    <Logo theme={'a'} title={meta_defaults.title}/>
    <RightArea>
      <Menu location={0} orientation={props.orientation} navLocation={'header'}/>
      <CloseWrapper>
        <Close clickFunction={() => props.menu_toggle(false)} color={colors.white} size={`2.5rem`} stroke={3} top={`auto`} position={`relative`}/>
      </CloseWrapper>
    </RightArea>
  </HeaderWrapperHorizontal>

export default connect(
  state => ({
    header_state: state.header_state,
    direction: state.scroll_direction,
    page: state.page
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(HeaderHorizontal)

/* STYLES */
const HeaderWrapperHorizontal = styled.header`
  width: 100vw;
  ${flexRowCenteredVert};
  height: ${heights.header};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.single_pad};
  ${menuTransition};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  background-color: ${colors.header_bg_color};
  * {
    color: ${colors.header_type_color}!important;
  }
  justify-content: space-between;
  &.hide {
    opacity: 0;
    transform: translateY(-${heights.header});
  }
`

const RightArea = styled.div`
  ${flexRow};
  height: ${heights.header};
`

const CloseWrapper = styled.div`
  ${flexRowCenteredVert};
  ${opacityTransition};
  justify-content: flex-end;
  width: calc(${heights.header} - .5rem);
  height: ${heights.header};
  opacity: .5;
  &:hover {
    opacity: 1;
  }
`
