import React from 'react'
import styled from 'styled-components'
import { fullWindow } from './../styles/mixins'
import { Spinner } from './../components'

export default (props) =>
  <LoadingWrapper bgcolor={props.bgcolor.regular}>
    <Spinner size={'40vmin'} color={props.bgcolor.dark} stroke={1} />
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  background-color: ${props => props.bgcolor};
  overflow: hidden;
`