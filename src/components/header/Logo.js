import React from 'react'
import styled from 'styled-components'
import { bodyType, flexRowCenteredVert, smallType, media } from './../../styles/mixins'
import { spacing, colors, heights } from './../../styles/theme.json'
import { StyledLink, H2 } from './../../styles/components'
import { meta_defaults } from './../../config.json'

export default () =>
  <Logo to={'/'}>
    <LogoType>{meta_defaults.title}</LogoType>
  </Logo>

const Logo = styled(StyledLink)`
  ${bodyType};
  ${flexRowCenteredVert};
  padding: ${spacing.single_pad} 0;
  width: 16rem;
  height: ${heights.header};
  position: fixed;
  left: ${spacing.double_pad};
  top: 1rem;
  ${media.desktopNav`
    top: 0;
    position: relative;
  `}
`

const LogoType = styled(H2)`
  ${smallType};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.white}!important;
`