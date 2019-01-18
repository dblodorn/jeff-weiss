import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heights, spacing, shared, colors, widths } from './theme.json'
import * as _ from './mixins'
import { randomArrItem } from './../scripts'
import { fonts } from './../config.json'

// DOM NODES
const Section = styled.section`
  width: 100%;
  ${_.flexColumn};
`

const Article = styled.article`
  ${_.wrapperWidths};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
`

const PadWrapper = styled.div`
  ${_.mainPadding};
  &.add-top-border {
    border-top: ${shared.border_thin};
  }
`

const GridWrapper = styled.ul`
  ${_.wrapperWidths};
  ${_.flexRowWrap};
  ${_.grid};
`

const ProportionWrapper = styled.div`
  height: 0;
  overflow-y: visible;
  position: relative;
  width: 100%;
  padding-bottom: ${props => `${props.Mobile}%` || `100%`};
  ${_.media.medium`
    padding-bottom: ${props => `${props.Desktop}%` || `50%`};
  `}
  ${_.media.big`
    padding-bottom: ${props => `${props.Max}%` || `45%`};
  `}
`

const StyledRangeSlider = styled.input`
  -webkit-appearance: none!important;
  width: 100%;
  height: 100%;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: ${props => props.rangebg}!important;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 0;
    height: ${props => props.height}!important;;
    width: .5rem!important;
    cursor: pointer!important;
    display: block!important;
    border: 0!important;
    border-radius: 0!important;
    margin: 0!important;
    background-color: white;
    color: white;
  }
  &::-moz-range-thumb {
    height: 100%!important;
    width: .5rem;
    cursor: pointer;
    display: block;
    border: 0;
    border-radius: 0;
    background-color: ${props => props.thumbbg};
  }
  &::-moz-focus-inner {
    border: 0;
    outline: none;
    &::-webkit-slider-runnable-track {
      border: 0;
      outline: none;
    }
  }
  &:focus {
    outline: none;
    border: 0;
    &::-webkit-slider-runnable-track {
      border: 0;
      outline: none;
    }
  }
  &::-webkit-slider-runnable-track,
  &::-moz-range-track {
    -webkit-appearance: none!important;
    display: block!important;
    width: 100%!important;
    height: 100%!important;
    cursor: pointer!important;
    background-color: ${props => props.rangebg}!important;
  }
  &::-moz-range-progress,
  &::-webkit-progress-value,
  &::-webkit-progress-bar {
    -webkit-appearance: none!important;
    display: block!important;
    background-color: ${props => props.progressbg}!important;
    height: 100%!important;
  }
`

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  color: ${colors.white};
  font-family: ${props => props.font || randomArrItem(fonts)};
  text-transform: ${props => props.theme.display_case};
`

const H2 = styled.h2`
  ${_.mediumType};
  color: ${colors.white};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.white};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const H4 = styled.h4`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.white};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const H5 = styled.h5`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const H6 = styled.h6`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const P = styled.p`
  ${_.bodyType};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const SmallP = styled.p`
  ${_.smallType};
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const MicroP = styled.p`
  font-size: 1rem;
  font-family: ${props => props.font || randomArrItem(fonts)};
`

const StyledButton = styled.button`
  ${_.buttonStyle};
`

const ButtonLink = styled(Link)`
  ${_.buttonStyle};
`

const StyledMarkup = styled.div`
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
    color: ${colors.white};
    font-family: ${props => props.displayFont || randomArrItem(fonts)};
  }
  h2 {
    ${_.mediumType};
    color: ${colors.white};
    font-family: ${props => props.displayFont || randomArrItem(fonts)};
  }
  h3 {
    ${_.bodyType};
    color: ${colors.white};
    font-family: ${props => props.displayFont || randomArrItem(fonts)};
  }
  h4 {
    ${_.bodyType};
    color: ${colors.white};
    font-family: ${props => props.font || randomArrItem(fonts)};
  }
  h5 {
    ${_.bodyType};
    font-family: ${props => props.font || randomArrItem(fonts)};
  }
  h6 {
    ${_.bodyType};
    font-family: ${props => props.font || randomArrItem(fonts)};
  }
  p {
    ${_.bodyType};
    font-family: ${props => props.font || randomArrItem(fonts)};
    margin-bottom: ${spacing.single_pad};
    max-width: ${widths.max_medium};
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    ${_.defaultLink};
    color: ${colors.white};
    font-family: ${props => props.font || randomArrItem(fonts)};
  }
`

// UI
const StyledLink = styled(Link)`
  ${_.defaultLink};
`

const NavItem = styled.li`
  padding-bottom: ${spacing.double_pad};
  &:last-child {
    padding-bottom: 0;
  }
  ${_.media.medium`
    padding-right: ${spacing.double_pad};
    padding-bottom: 0;
    &:last-child {
      padding-right: 0;
    }
  `}
  a.active {
    pointer-events: none!important;
    position: relative;
    &:after {
      content: '';
      display: block;
      border-bottom: 1px solid ${colors.whiter};
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    ${_.media.desktopNav`
      &:after {
        display: none;
      }
    `}
  }
  &.sidebar {
    ${_.media.desktopNav`
      padding-bottom: ${spacing.double_pad};
      padding-right: 0;
      &.footer {
        padding-bottom: 0;
        padding-right: ${spacing.double_pad};
        &:last-child {
          padding-right: 0;
        }
      }
    `}
  }
`

const SocialLink = styled.a`
  display: block;
  width: 3rem;
  height: 3rem;
  svg {
    width: 100%;
    height: auto;
  }
`

// WRAPPERS
const LogoWrapperFixedTopRight = styled.div`
  position: fixed;
  top: ${props => props.position_sm};
  right: ${props => props.position_sm};
  z-index: 9000;
  ${_.media.medium`
    top: ${props => props.position_med};
    right: ${props => props.position_med};
  `}
`

const LogoType = styled(H2)`
  ${_.smallType};
  text-transform: uppercase;
  font-family: ${props => props.font || randomArrItem(fonts)}!important;
  letter-spacing: 1px;
  color: ${colors.white}!important;
`

const FullPageBgWrapper = styled.aside`
  ${_.fixedTopLeft};
  width: 100%;
  height: 100vh;
  z-index: 0;
`

const ModalWrapper = styled.div`
  ${_.flexCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.popup_bg_color || colors.black};
`

const ModalContentWrapper = styled.div`
  ${_.flexCenteredAll};
  width: 100%;
  height: 100%;
  position: relative;
`

const CloseButton = styled.button`
  ${_.buttonInit};
  width: ${props => props.size};
  height: ${props => props.size};
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.top};
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`

const CloseWrapper = styled.div`
  ${_.flexRowCenteredVert};
  justify-content: flex-end;
  width: calc(${heights.header} - .5rem);
  height: ${heights.header};
  margin-left: ${spacing.single_pad};
  ${_.opacityTransition};
  opacity: .5;
  &:hover {
    opacity: 1;
  }
`

const SidebarNav = styled.button`
  ${_.buttonInit};
  ${_.flexCenteredAll};
  ${_.opacityTransition};
  ${_.menuTransition};
  position: fixed;
  top: .25rem;
  right: 0;
  width: 4.25rem;
  height: 5rem;
  opacity: .9;
  cursor: pointer;
  z-index: 8000;
  ${_.media.desktopNav`
    top: 0;
    right: 0;
    height: 4.5rem;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
  `}
  &.hide {
    opacity: 0;
    transform: translateX(4rem);
  }
`

export {
  Section,
  Article,
  PadWrapper,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SmallP,
  StyledMarkup,
  SocialLink,
  StyledLink,
  LogoWrapperFixedTopRight,
  FullPageBgWrapper,
  NavItem,
  ButtonLink,
  StyledButton,
  GridWrapper,
  ProportionWrapper,
  ModalWrapper,
  ModalContentWrapper,
  CloseButton,
  CloseWrapper,
  SidebarNav,
  LogoType,
  StyledRangeSlider,
  MicroP
}