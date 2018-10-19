import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { bodyType, flexRowCenteredVert } from './../../styles/mixins'
import { spacing, shared, colors } from './../../styles/theme.json'
import { StyledLink, H2 } from './../../styles/components'
import { meta_defaults } from './../../config.json'

export default (props) =>
  <ThemeProvider theme={themes[props.theme] || themeA}>
    <Logo to={'/'} className={props.orientation}>
      <LogoType>{meta_defaults.title}</LogoType>
    </Logo>
  </ThemeProvider>

  const Logo = styled(StyledLink)`
    ${bodyType};
    ${flexRowCenteredVert};
    object-fit: contain;
    padding: ${spacing.single_pad} 0;
    width: 16rem;
    height: 100%;
    background-color: ${colors.white};
    &.sidebar {
      height: auto;
      width: 100%;
      padding: ${spacing.double_pad};
      border-bottom: ${shared.border_thin};
      text-align: right;
    }
`

const LogoType = styled(H2)`
  color: ${colors.black}!important;
`