import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import { Section, H2 } from './../../../styles/components';

export default (props) => {
  return (
    <ThemeProvider theme={themes[props.theme] || themeA}>
      <Section>
        <H2>Home Page</H2>
      </Section>
    </ThemeProvider>
  )
}