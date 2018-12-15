import React from 'react'
import styled from 'styled-components'
import { fullWindow, flexCenteredAll, bodyType } from './../styles/mixins'
import { LogoType } from './../styles/components'

export default (props) =>
  <LoadingWrapper bgcolor={props.bgcolor.regular}>
    <LogoType>Jeff Weiss</LogoType>
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
  background-color: ${props => props.bgcolor};
  overflow: hidden;
`
