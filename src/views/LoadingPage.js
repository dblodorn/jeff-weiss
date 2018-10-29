import React from 'react'
import styled from 'styled-components'
import { fullWindow, navWrapperHorizontal } from './../styles/mixins'
import { Spinner } from './../components'
import Logo from './../components/header/Logo'

export default (props) =>
  <LoadingWrapper bgcolor={props.bgcolor.regular}>
    <LogoWrap>
      <Logo/>
    </LogoWrap>
    <Spinner size={'40vmin'} color={props.bgcolor.dark} stroke={1} />
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  background-color: ${props => props.bgcolor};
  overflow: hidden;
`

const LogoWrap = styled.div`
  ${navWrapperHorizontal};
  top: 0;
  left: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0);
`