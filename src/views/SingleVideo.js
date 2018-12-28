import React from 'react'
import styled from 'styled-components'
import { themeA, themes } from './../styles/theme'
import { Video, pageData, BackClose } from './../components'
import { Section } from './../styles/components'
import { flexCenteredAll, buttonInit } from './../styles/mixins'
import { colors } from './../styles/theme.json'

export default pageData((props) => {
  return (
    <VideoSection>
      <BackClose color={themes[props.project.theme].popup_close_color || themeA.popup_close_color}/>
      <VideoWrapper>
        <Video coverUrl={props.project.thumbnail} videoUrl={props.project.video_url} autoplay={true} single={true}/>
      </VideoWrapper>
    </VideoSection>
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
