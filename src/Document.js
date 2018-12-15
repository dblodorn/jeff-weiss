import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { animationFadeIn, flexColumn, media } from './styles/mixins'
import { colors, fonts, heights, widths } from './styles/theme.json'
import { routeName } from './scripts'
import { Header, Head } from './components'
import { LoadingPage } from './views'

const Document = props =>
    <Fragment>
      <GlobalStyles bgcolor={props.color.regular} barcolor={props.color.bright}/>
      {(props.api_data) 
        ? <Fragment>
            <Head title={routeName(props.router.location.pathname).routeTitle} description={routeName(props.router.location.pathname).routeTitle} />
            <Header />
            <Main id={routeName(props.router.location.pathname).routeClass} className={props.header_style}>
              {props.children}
            </Main>
          </Fragment>
        : <LoadingPage bgcolor={props.color} />
      }
    </Fragment>

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
  &.sidebar {
    ${media.desktopNav`
      padding-left: ${widths.sidebar_desktop};
      padding-bottom: ${heights.footer};
    `}
  }
`

// NORMALIZE CSS
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 58%;
    background-color: ${props => props.bgcolor};
    transition: background-color 1000ms ease-in-out;
    will-change: background-color;
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
    background-color: ${props => props.bgcolor};
    transition: background-color 1000ms ease-in-out;
    will-change: background-color;
  }
  ::-webkit-scrollbar {
    width: 2px;
    opacity: .5;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(255,255,255,.35);
    border: 0;
    width: 2px;
    opacity: .5;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.white};
    width: 2px;
    border: 0;
    opacity: .5;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
    ${fonts.sans};
  }
`
