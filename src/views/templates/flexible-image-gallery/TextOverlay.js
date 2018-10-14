import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeA, themes } from './../../../styles/theme'
import { StyledMarkup } from './../../../styles/components'
import { fullWindow, positionClasses } from './../../../styles/mixins'
import { heights, spacing, shared } from './../../../styles/theme.json'

export default (props) =>
  <ThemeProvider theme={themes[props.theme] || ThemeA}>
    <TextOverlay className={props.content.text_overlay_postion}>
      <OverlayWrapper>
        <StyledMarkup dangerouslySetInnerHTML={{__html: props.content.text_overlay_content }}/>
      </OverlayWrapper>
    </TextOverlay>
  </ThemeProvider>

// STYLES
const TextOverlay = styled.div`
  ${fullWindow};
  ${positionClasses};
  height: 100%;
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
  padding-top: calc(${spacing.double_pad} + ${heights.header});
  padding-bottom: calc(${spacing.double_pad} + ${heights.footer});
  z-index: 100;
`

const OverlayWrapper = styled.div`
  width: 100%;
  max-width: ${shared.max_width};
`