import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeA, themes } from './../../../styles/theme'
import { StyledMarkup } from './../../../styles/components'
import { fullWindow, positionClasses, opacityTransition, fancyScroll } from './../../../styles/mixins'
import { heights, shared, spacing } from './../../../styles/theme.json'

const TextOverlay = (props) =>
  <ThemeProvider theme={themes[props.theme] || ThemeA}>
    <Overlay className={props.content.text_overlay_postion}>
      <OverlayWrapper bgcolor={props.color}>
        <StyledMarkup className={'text'} dangerouslySetInnerHTML={{__html: props.content.text_overlay_content }}/>
      </OverlayWrapper>
    </Overlay>
  </ThemeProvider>

export default connect(
  state => ({
    color: state.color
  })
)(TextOverlay)

// STYLES
const Overlay = styled.div`
  ${fullWindow};
  ${positionClasses};
  height: 100%;
  padding: ${heights.header};
  z-index: 1000;
`

const OverlayWrapper = styled.div`
  ${opacityTransition};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: ${shared.max_width};
  max-height: calc(80vh - ${heights.header});
  opacity: 0;
  cursor: pointer;
  padding: 0 ${spacing.double_pad};
  &:hover {
    opacity: 1;
  }
  .text {
    position: relative;
    display: block;
    z-index: 1000;
  }
  &:after {
    background-color: ${props => props.bgcolor};
    content: '';
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: .9;
    display: block;
    z-index: 100;
  }
`