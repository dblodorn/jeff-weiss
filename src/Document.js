import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { animationFadeIn, flexColumn, media, colorTransition } from './styles/mixins'
import { colors, fonts, heights, widths } from './styles/theme.json'
import { routeName } from './scripts'
import { Header, Head } from './components'
import LoadingPage from './views/LoadingPage'

const Document = props =>
    <Fragment>
      <GlobalStyles bgcolor={props.color.regular} barcolor={props.color.bright}/>
      {(props.api_data) 
        ? <Fragment>
            <Head title={routeName(props.router.location.pathname).routeTitle}/>
            <Header/>
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
`

// NORMALIZE CSS
const GlobalStyles = createGlobalStyle`
  html {
    ${colorTransition};
    font-size: 58%;
    background-color: ${props => props.bgcolor};
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 70.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 72.5%;
    }
  }
  body {
    font-family: arial;
    color: ${colors.black};
    font-family: ${fonts.sans};
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
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
  :focus {outline:none!important;}
  ::-moz-focus-inner {
    border:0!important;
    -moz-outline-style: none;
  }
`
