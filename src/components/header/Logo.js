import React from 'react'
import styled from 'styled-components'
import { bodyType, flexRowCenteredVert, smallType } from './../../styles/mixins'
import { spacing, shared, colors, heights } from './../../styles/theme.json'
import { StyledLink, H2 } from './../../styles/components'
import { meta_defaults } from './../../config.json'

export default (props) =>
  <Logo to={'/'} className={props.orientation}>
    <LogoType>{meta_defaults.title}</LogoType>
  </Logo>

  const Logo = styled(StyledLink)`
    ${bodyType};
    ${flexRowCenteredVert};
    object-fit: contain;
    padding: ${spacing.single_pad} 0;
    width: 16rem;
    height: ${heights.header};
    &.sidebar {
      height: auto;
      width: 100%;
      padding: ${spacing.double_pad};
      border-bottom: ${shared.border_thin};
      text-align: right;
    }
`

const LogoType = styled(H2)`
  ${smallType};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.white}!important;
`