import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { StyledMarkup, MicroP } from './../styles/components'
import { flexCenteredAll, opacityTransition, media, buttonInit } from './../styles/mixins'
import { heights, shared, spacing, colors } from './../styles/theme.json'
import ResponsiveWrapper from './ResponsiveWrapper'
import Info from './utils/Info'
import Close from './utils/Close'

const TextOverlay = (props) => {
  const [tapped, isTapped] = React.useState(false)
  const handleTap = () => {
    isTapped(!tapped)
  }
  return (
    <ResponsiveWrapper
      desktop={
        <Overlay>
          <OverlayWrapper bgcolor={props.color.dark}>
            <StyledMarkup className={'text'} dangerouslySetInnerHTML={{ __html: props.content }} />
            {props.zoom && <ZoomCta onClick={props.clickFunction}><MicroP>Click to Zoom</MicroP></ZoomCta>}
          </OverlayWrapper>
        </Overlay>
      }
      mobile={
        <React.Fragment>
          <OverlayMobile className={tapped && `show`}>
            <OverlayWrapper bgcolor={props.color.regular} className={tapped && 'tapped'}>
              <StyledMarkup className={'text'} dangerouslySetInnerHTML={{ __html: props.content }} />
              {props.zoom && <ZoomCta><MicroP>Pinch to Zoom</MicroP></ZoomCta>}
            </OverlayWrapper>
          </OverlayMobile>
          <InfoButton className={props.slideshow && `slideshow`}>
            {!tapped
              ? <Info clickFunction={() => handleTap()} position={`relative`} size={`100%`} top={'0'}/>
              : <Close clickFunction={() => handleTap()} position={`relative`} size={`2.25rem`} top={'0'} color={`#ffffff`} stroke={3}/>
            }
          </InfoButton>
        </React.Fragment>
      }
    />
  )
}

export default connect(
  state => ({
    color: state.color
  })
)(TextOverlay)

// STYLES
const InfoButton = styled.div`
  padding: 0;
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  position: fixed;
  bottom: 3.85rem;
  right: 1rem;
  margin: auto;
  z-index: 9000;
  &.slideshow {
    left: 0;
    right: 0;
    bottom: 8rem;
  }
`

const ZoomCta = styled.button`
  ${buttonInit};
  position: absolute;
  width: 20rem;
  bottom: 0;
  left: 0;
  z-index: 9000;
  text-align: left;
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
  &:hover {
    text-decoration: underline;
  }
`

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

const OverlayMobile = styled.div`
  width: 100vw;
  height: calc(100vh - 12rem);
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  &.show {
    opacity: 1;
    pointer-events: default;
  }
  ${flexCenteredAll};
  * {
    color: ${colors.white};
  }
`

const OverlayWrapper = styled.div`
  ${opacityTransition};
  position: relative;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: ${shared.max_width};
  min-height: 50vh;
  cursor: pointer;
  padding: ${spacing.double_pad};
  ${media.desktopNav`
    opacity: 0;
    max-height: calc(80vh - ${heights.header});
    &:hover {
      opacity: 1;
    }
  `}
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
    opacity: .9;
    display: block;
    z-index: 100;
    pointer-events: none;
    height: calc(100vh - 12rem);
    ${media.desktopNav`
      height: 100vh;
    `}
  }
`