import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { flexRowCenteredVert } from '../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Menu from '../menus/Menu'
import Logo from './Logo'

export default (props) =>
  <Transition from={{ opacity: 0, transform: `translateY(-${heights.header})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateY(-${heights.header})`, pointerEvents: 'none' }}>
    {props.header_state && (styles => 
      <HeaderWrapperHorizontal style={styles}>
        <Logo theme={'a'} title={meta_defaults.title}/>
        <Menu location={0} orientation={props.orientation} navLocation={'header'}/>
      </HeaderWrapperHorizontal>
    )}
  </Transition>

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
  border-bottom: 1px solid ${colors.black};
  background-color: ${colors.header_bg_color};
`
