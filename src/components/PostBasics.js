import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../styles/theme'
import { spacing, heights, shared } from './../styles/theme.json'
import { H1, StyledMarkup, Section, Article } from './../styles/components'
import { media, halfFixed } from './../styles/mixins'
import Head from './utils/Head'

export default (props) => 
  <Fragment>
    <Head title={props.data.title} description={props.data.short_description}/>
  </Fragment>
