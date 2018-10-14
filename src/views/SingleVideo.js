import React, { Fragment, Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../styles/theme'
import { Video, PostBasics, pageData, BackClose } from './../components'
import { Section } from './../styles/components'
import { flexCenteredAll, buttonInit } from './../styles/mixins'
import { colors } from './../styles/theme.json'

export default pageData((props) => {
  return (
    <Fragment>
      <PostBasics data={props.project} style={props.style}/>
      <ThemeProvider theme={themes[props.project.theme] || themeA}>
        <VideoSection>
          <BackClose color={themes[props.project.theme].popup_close_color || themeA.popup_close_color}/>
          <VideoWrapper>
            <Video coverUrl={props.project.thumbnail} videoUrl={props.project.video_url} autoplay={true} single={true}/>
          </VideoWrapper>
        </VideoSection>
      </ThemeProvider>
    </Fragment>
  )
})

const VideoSection = styled(Section)`
  ${flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
`

const VideoWrapper = styled.div`
  width: 75vw;
`
const BackButtonStyle = styled.button`
  ${buttonInit};
  color: white;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
`