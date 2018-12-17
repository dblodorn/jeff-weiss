import React from 'react'
import styled from 'styled-components'
import { absoluteCentered, absoluteTopFull } from './../../styles/mixins'

export default props =>
  <Wrapper>
    <ImgFit src={props.src}/>
  </Wrapper>

const Wrapper = styled.div`
  ${absoluteTopFull};
`

const ImgFit = styled.img`
  ${absoluteCentered};
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
`
