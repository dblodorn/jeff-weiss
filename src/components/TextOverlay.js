import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { StyledMarkup } from './../styles/components'
import { flexCenteredAll, opacityTransition } from './../styles/mixins'
import { heights, shared, spacing, colors } from './../styles/theme.json'

const TextOverlay = (props) =>
  <Overlay>
    <OverlayWrapper bgcolor={props.color.dark}>
      <StyledMarkup className={'text'} dangerouslySetInnerHTML={{__html: props.content }}/>
    </OverlayWrapper>
  </Overlay>

export default connect(
  state => ({
    color: state.color
  })
)(TextOverlay)

// STYLES
const Overlay = styled.div`
  width: calc(100vw - (${heights.header} * 2));
  height: calc(100vh - (${heights.header} * 2));
  ${flexCenteredAll};
  top: ${heights.header};
  left: ${heights.header};
  position: fixed;
  z-index: 12000;
  * {
    color: ${colors.white};
  }
`

const OverlayWrapper = styled.div`
  ${opacityTransition};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: ${shared.max_width};
  min-height: 50vh;
  max-height: calc(80vh - ${heights.header});
  opacity: 0;
  cursor: pointer;
  padding: ${spacing.double_pad};
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