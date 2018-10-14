import Color from 'color'
import { css, keyframes } from 'styled-components'
import { spacing, fonts, shared, breakpoints, colors, widths, heights } from './theme.json'

// Media Queries
const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args) }
    }
  `,
  desktopNav: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args) }
    }
  `,
  big: (...args) => css`
    @media (min-width: ${breakpoints.big}px) {
      ${ css(...args) }
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${ css(...args) }
    }
  `
}

// Layout & Positioning UTILS
const maxWidth = css`
  width: 100%;
  max-width: ${shared.max_width};
`

const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const fixedTopLeft = css`
  position: fixed;
  top: 0;
  left: 0;
`

const mainPadding = css`
  padding: ${spacing.double_pad};
`

const scrollPanel = css`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

// TYPOGRAPHY
const sansFont = css`
  font-family: ${fonts.sans};
  font-weight: 400;
`

const bigType = css`
  ${sansFont};
  font-size: ${fonts.sizes.giant_sm};
  line-height: 1;
  ${media.medium`
    font-size: ${fonts.sizes.giant};
  `}
`

const mediumType = css`
  ${sansFont};  
  font-size: ${fonts.sizes.medium_sm};
  line-height: 1;
  ${media.medium`
    font-size: ${fonts.sizes.medium};
  `}
`

const bodyType = css`
  ${sansFont};
  font-size: ${fonts.sizes.body_sm};
  line-height: 1.35;
  ${media.medium`
    font-size: ${fonts.sizes.body};
  `}
`

const smallType = css`
  ${sansFont};
  font-size: ${fonts.sizes.small_sm};
  line-height: 1.25;
  ${media.medium`
    font-size: ${fonts.sizes.small};
  `}
`

const microType = css`
  ${sansFont};
  font-size: ${fonts.sizes.micro_sm};
  line-height: 1.25;
  ${media.medium`
    font-size: ${fonts.sizes.micro};
  `}
`

const defaultLink = css`
  ${sansFont};
  ${bodyType};
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;
  span {
    position: relative;
    z-index: 10;
    display: block;
  }
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
    color: ${colors.hover_color};
  }
`

const opacityTransition = css`
  transition: opacity 450ms ease-in-out;
  will-change: opacity;
`

// STYLE UTILS
const buttonInit = css`
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  border: 0;
  background-color: rgba(255,255,255,0);
  border-radius: 0;
  appearance: none;
  cursor: pointer;
  display: block;
`

const transitionAll = (time) => {
  return css`
    transition-property: all;
    transition-duration: ${time}ms;
    transition-timing-function: ease;
  `
}

const shadow = css`
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.33);
`

// Flex Layout
const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

const flexRowCenteredAll = css`
  ${flexRowCenteredVert};
  justify-content: center;
`

const flexCenteredAll = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

//

const buttonStyle = css`
  ${buttonInit};
  ${microType};
  ${flexCenteredAll};
  text-transform: uppercase;
  height: 3rem;
  background-color: ${Color(colors.button_color).hsl().string()};
  color: ${colors.button_typs_color};
  border-radius: 1.5rem;
  will-change: background-color;
  transition: background-color 250ms ease;
  text-decoration: none;
  padding: 0 calc(${spacing.single_pad} * 1.5)!important;
  letter-spacing: 1px;
  font-weight: 600;
  flex-grow: 0;
  flex-shrink: 0;
  span {
    padding-top: .25rem;
  }
  &:hover {
    background-color: ${Color(colors.button_color).darken(.25).hsl().string()};
  }
  &.active {
    background-color: ${Color(colors.button_color).darken(.5).hsl().string()};
  }
  ${media.small`
    background-color: ${Color(colors.button_color).darken(.125).hsl().string()}; 
    width: auto;
    min-width: 10rem;
    padding: 0 1.5rem;
    span {
      padding-top: 2px;
    }
    &.active {
      background-color: ${Color(colors.button_color).darken(1.5)};
    }
  `}
`

// Animation
const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const animationRotate = css`
  animation: ${spin} 700ms linear 0s infinite normal;
  animation-fill-mode: forwards;
`

const simpleFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const pulseAnimation = css`
  animation: 350ms linear ${pulse} infinite;
`

const animationFadeIn = (time, delay) => {
  return css`
    animation: ${simpleFade} ${time}ms ease normal;
    animation-delay: ${delay}ms;
    animation-fill-mode: both;
  `
}

const borderRadius = (radius) => {
  return css`
    border-radius: ${radius}!important;
  `
}

const textShadow = (blur, color) => {
  return css`
    text-shadow: 2px 2px ${blur}px ${color};
  `
}

const fullBg = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const fullWindow = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const absoluteTopFull = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const positionClasses = css`
  display: flex;
  flex-direction: column;
  &.centered {
    align-items: center;
    justify-content: center;
  }
  &.centered_right {
    align-items: flex-end;
    justify-content: center;
  }
  &.top_right {
    align-items: flex-end;
    justify-content: flex-start;
  }
  &.bottom_right {
    align-items: flex-end;
    justify-content: flex-end;
  }
  &.centered_left {
    align-items: flex-start;
    justify-content: center;
  }
  &.top_left {
    align-items: flex-start;
    justify-content: flex-start;
  }
  &.bottom_left {
    align-items: flex-start;
    justify-content: flex-end;
  }
`

const wrapperWidths = css`
  width: 100%;
  margin: 0 auto;
  &.full_width {
    max-width: 100%;
  }
  &.max_large {
    max-width: ${widths.max_large};
  }
  &.max_medium {
    max-width: ${widths.max_medium};
  }
  &.max_small {
    max-width: ${widths.max_small};
  }
`

const grid = css`
  flex-grow: 0;
  flex-shrink: 0;
  li {
    width: 100%;
    position: relative;
  }
  ${media.desktopNav`
    &.one_col > li {
      width: 100%;
    }
    &.three_col > li {
      width: calc(100% / 3);
    }
    &.four_col > li {
      width: 25%;
    }
    &.two_col > li {
      width: 50%;
    }
  `}
`

const fancyScroll = css`
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors.white};
    border: 0;
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.blue};
    width: 2px;
    border: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.grey};
    width: 2px;
    border: 0;
  }
`

const fixedHero = (top, bottom, left) => {
  return css`
    &.fixed-hero {
      margin: 0;
      max-height: 100vh;
      height: 100vh;
      overflow: hidden;
      ${media.desktopNav`
        padding-bottom: ${bottom};
        padding-top: ${top};
        padding-left: ${left};
        position: fixed;
        top: 0;
        height: 100vh;
      `}
    }
  `
}

const fixedWindow = css`
  ${fancyScroll};
  padding: ${heights.header} 0 ${heights.footer};
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  article {
    padding-top: ${spacing.double_pad};
    padding-bottom: ${heights.footer};
  }
`

const halfFixed = css`
  &.fixed_left {
    ${fixedWindow};
    left: 0;
    border-right: ${shared.border_thin};   
    &.sidebar {
      width: calc(50vw - (${widths.sidebar_desktop} / 2));
      left: ${widths.sidebar_desktop};
    } 
  }
  &.fixed_right {
    ${fixedWindow};
    right: 0;
    &.sidebar {
      width: calc(50vw - (${widths.sidebar_desktop} / 2));
    }    
  }
`

export {
  media,
  maxWidth,
  absoluteCentered,
  fixedTopLeft,
  mainPadding,
  scrollPanel,
  bigType,
  mediumType,
  bodyType,
  smallType,
  microType,
  defaultLink,
  transitionAll,
  buttonInit,
  shadow,
  animationRotate,
  animationFadeIn,
  flexColumn,
  flexColumnCentered,
  flexRow,
  flexRowWrap,
  flexRowCenteredVert,
  flexRowSpaceBetween,
  flexRowCenteredAll,
  flexCenteredAll,
  borderRadius,
  pulseAnimation,
  fullBg,
  grid,
  fullWindow,
  positionClasses,
  absoluteTopFull,
  opacityTransition,
  wrapperWidths,
  buttonStyle,
  textShadow,
  fixedHero,
  halfFixed,
  fixedWindow
}