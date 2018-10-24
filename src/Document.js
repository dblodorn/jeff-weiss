import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import { animationFadeIn, flexColumn, media } from './styles/mixins'
import { colors, fonts, heights, widths, spacing } from './styles/theme.json'
import { routeName } from './scripts'
import { Header } from './components'
import { LoadingPage } from './views'

const Document = (props) => {
  if (props.api_data) {
    return (
      <Fragment>
        <Header/>
        <Main id={routeName(props.router.location.pathname).routeClass} className={props.header_style} bgcolor={props.color}>
          {props.children}
        </Main>
      </Fragment>
    )
  } else {
    return <LoadingPage/>
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    header_style: state.header_style,
    router: state.router,
    color: state.color
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${animationFadeIn(1000, 150)};
  ${flexColumn};
  width: 100vw;
  position: relative;
  min-height: 100vh;
  background-color: ${props => props.bgcolor};
  transition: background-color 3000ms ease-in-out;
  will-change: background-color;
  &.sidebar {
    ${media.desktopNav`
      padding-left: ${widths.sidebar_desktop};
      padding-bottom: ${heights.footer};
    `}
  }
`

// NORMALIZE CSS
injectGlobal`
  html {
    font-size: 58%;
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 72.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 78.5%;
    }
  }
  body {
    font-family: arial;
    color: ${colors.black};
    font-family: ${fonts.sans};
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
    ${fonts.sans};
  }
`
