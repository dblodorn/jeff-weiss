import React from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { absoluteTopFull, flexCenteredAll, buttonInit, animationFadeIn, media } from './../styles/mixins'
import { colors, fonts } from './../styles/theme.json'
import { PrevButton, NextButton } from './utils/PrevNextButton'
import TextOverlay from './TextOverlay'
import FitImage from './utils/FitImage'

class Slide extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      updating: true
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount = () => {
    this.mounted = true;
    this.timeout = this.timer();
  }
  
  componentWillUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.setState({updating: false})
      if (this.mounted) {
        this.timer()
      }
    }
  }

  timer = () =>
    setTimeout(() => {
      this.setState({ updating: true })
    }, 1);

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <SlideWrap className={this.props.class}>
        {(this.props.caption) && <TextOverlay slideshow={(this.props.slides > 1) && `multi-slideshow`} content={`<h2>${this.props.slideData.image.description.title}</h2><br><p>${this.props.slideData.image.description.caption}</p>`} /> }
        {(this.mounted && this.state.updating) &&
          <SlideWrapper>
            <FitImage src={this.props.slideData.image} fit={'contain'} srcset />  
          </SlideWrapper>
        }
      </SlideWrap>
    )
  }
}

class SimpleSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
    this.nextHandler = this.nextHandler.bind(this);
    this.prevHandler = this.prevHandler.bind(this);
  }

  nextHandler = () => {
    if (this.state.index === (this.props.slides.length - 1)) {
      this.setState({ index: 0})
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }

  prevHandler = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.props.slides.length - 1 })
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    return (
      <SliderWrapper wh={this.props.wh}>
        {(this.props.slides.length > 1)
          ? <React.Fragment>
              <InnerSlide>
                <Slide slideData={this.props.slides[this.state.index]} caption={this.props.captions} slides={this.props.slides.length}/>
              </InnerSlide>
              <ButtonLeft onClick={() => this.prevHandler()}><PrevButton /></ButtonLeft>
              <ButtonRight onClick={() => this.nextHandler()}><NextButton /></ButtonRight>
              <Pagination font={this.props.font}><span>{`${this.state.index + 1} / ${this.props.slides.length}`}</span></Pagination>
            </React.Fragment>
          : <InnerSlide>
            <Slide slideData={this.props.slides[0]} caption={this.props.caption} class={`current`} slides={this.props.slides.length}/>
            </InnerSlide>
        }
      </SliderWrapper>
    )
  }
}

export default connect(
  state => ({
    font: state.fonts.top_menu,
    wh: state.resize_state.window_height
  })
)(SimpleSlider)

const buttonWrap = css`
  ${buttonInit};
  padding: 0;
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 2rem;
  margin: auto;
  z-index: 9000;
  ${media.desktopNav`
    top: 0;
    bottom: 0;
  `}
`

const ButtonRight = styled.button`
  ${buttonWrap};
  ${flexCenteredAll};
  right: .5rem;
`

const ButtonLeft = styled.button`
  ${buttonWrap};
  ${flexCenteredAll};
  left: .5rem;
`

const SliderWrapper = styled.div`
  ${animationFadeIn(250, 50)};
  ${flexCenteredAll};
  top: 0;
  left: 0;
  position: fixed;
  height: ${props => props.wh}px;
  width: 100vw;
  overflow: hidden;
  ${media.desktopNav`
    height: 100vh;
  `}
`

const Pagination = styled.div`
  bottom: 2.75rem;
  width: 100%;
  text-align: center;
  ${flexCenteredAll};
  pointer-events: none;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  color: ${colors.white};
  font-family: ${props => props.font};
  font-size: ${fonts.sizes.micro};
  ${media.desktopNav`
    bottom: 1.25rem;
  `}
`

const InnerSlide = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100%;
`

// SLIDE
const SlideWrap = styled.div`
  ${absoluteTopFull};
  width: 100vw;
  height: 100%;
  z-index: 0!important;
  &.current {
    z-index: 90;
  }
  &.next {
    z-index: 100;
  }
`

const SlideWrapper = styled.div`
  ${absoluteTopFull};
  ${flexCenteredAll};
  ${animationFadeIn(350, 50)};
  z-index: 0!important;
  pointer-events: none;
`
