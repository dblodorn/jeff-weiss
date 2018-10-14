import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { ageVerification } from './state/actions'
import { AgeVerification, UI, EazeButton, MainMenu } from './components'
import styled, { injectGlobal } from 'styled-components'
import { media, flexColumn, animationFadeIn } from './styles'
import { colors, fonts, spacing } from './styles/theme.json'

const Document = (props) => {
  return (
    <Fragment>
      {(props.verfication)
        ? <Fragment>
            <UI/>
            <AgeVerification ClickFunction={() => props.set_verification(false)}/>
          </Fragment>
        : <Fragment>
            <MainMenu/>
            <UI/>
            <EazeButton link={props.content.eaze_link}/>
            <Main className={(props.menu) && 'menu-active'}>
              {props.children}
            </Main>
          </Fragment>
      }
    </Fragment>
  )
}

export default connect(
  state => ({
    resize_state: state.resize_state.window_width,
    verfication: state.verification,
    menu: state.menu,
    content: state.content
  }),
  dispatch => ({
    set_verification: (bool) => dispatch(ageVerification(bool))
  })
)(Document)

// NORMALIZE CSS
injectGlobal`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
  ol, ul {
    list-style: none;
  }
  html {
    font-size: 58%;
    -webkit-font-smoothing: antialiased;
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
    font-size: 16px;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: arial;
    color: ${colors.white};
    font-family: ${fonts.sans};
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    outline: 0;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
    ${fonts.sans};
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  *::-webkit-scrollbar-track {
    background: ${colors.dk_blue};
  }
  *::-webkit-scrollbar-thumb {
    background: ${colors.lt_blue};
  }
  *::-webkit-scrollbar-thumb:hover {
    background: ${colors.mint};
  }
`

const Main = styled.main`
  ${animationFadeIn(1000, 150)};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 100;
  ${flexColumn};
  z-index: 0;
  transform: translateX(0);
  transition: transform 500ms ease;
  will-change: transform;
  &.menu-active {
    transform: translateX(100vw);
  }
`
