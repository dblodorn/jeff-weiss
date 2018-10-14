import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexRowCenteredAll, flexColumn, buttonInit, mediumType, flexRow, bigType, animationFadeIn, media, fixedTopLeft } from './../styles/mixins'
import { colors, breakpoints, spacing, fonts } from './../styles/theme.json'

class AgeVerification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      over: false,
      ageImage: null,
      imgIndex: Math.floor(Math.random() * 4) + 1
    }
  }

  _mouseOut() {
    this.setState({
      over: false,
      ageImage: null
    })
  }

  _mouseOver(img) {
    const returnIndex = () => {
      const newIndex = this.state.imgIndex + 1
      if ( newIndex > 4) {
        return 1
      } else {
        return newIndex
      }
    }
    this.setState({
      over: true,
      ageImage: img,
      imgIndex: returnIndex()
    })
  }

  render() {
    const ButtonsMobile = () =>
      <ButtonWrapper>
        <AgeButton>no</AgeButton>
        <AgeButton onClick={this.props.ClickFunction}>yes</AgeButton>
      </ButtonWrapper>
    
    const Message = () =>
      <AgeMessage>
        <Age>
          <span>are you</span>
          <span>21 or</span>
          <span>older?</span>
        </Age>
        {(this.props.resize_state < breakpoints.desktop) && <ButtonsMobile/>}
      </AgeMessage>

    return (
      <VerificationWrapper>
        <Message/>
        {(this.props.resize_state >= breakpoints.desktop) &&
          <ButtonWrapper>
            <AgeButton onMouseOver={(img) => this._mouseOver(`./assets/besito-dog.jpg`)} onMouseOut={() => this._mouseOut()}>no</AgeButton>
            <AgeButton onClick={this.props.ClickFunction} onMouseOver={(img) => this._mouseOver(`./assets/over-${this.state.imgIndex}.jpg`)} onMouseOut={() => this._mouseOut()}>yes</AgeButton>
            {(this.state.over) &&
              <PhotoWrapper>
                <img src={this.state.ageImage}/>
              </PhotoWrapper>
            }
          </ButtonWrapper>
        }
      </VerificationWrapper>
    )
  }
}

export default connect(
  state => ({
    resize_state: state.resize_state.window_width
  })
)(AgeVerification)

// STYLES
const VerificationWrapper = styled.section`
  ${animationFadeIn(2500, 500)};  
  ${flexColumn};
  ${fixedTopLeft};
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
  justify-content: center;
  padding-left: ${spacing.medium_left};
  ${media.small`
    padding-bottom: 8rem;
  `}
  ${media.medium`
    ${flexRowCenteredAll};
  `}
`

const ButtonWrapper = styled.div`
  ${flexRow};  
  z-index: 100;
  width: 100%;
  margin-top: 1rem;
  ${media.medium`
    ${flexRow};
    padding-top: 3vmin;
    margin-right: 0;
    padding-top: 0;
    max-width: 60vmin;
    margin-left: auto;
    padding-right: 15vmin;
    button:first-child {
      margin-right: 2vw;
    }
  `}
`

const AgeButton = styled.button`
  ${buttonInit};
  ${mediumType};
  font-size: ${fonts.sizes.medium_sm};
  color: ${colors.white};
  transition: color 350ms ease;
  will-change: color;
  z-index: 1;
  padding: 0;
  margin: 0;
  flex-grow: 0;
  margin-right: 4rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${colors.pink};
    z-index: 100;
  }
`

const AgeMessage = styled.div`
  ${bigType};
  ${flexColumn};
  color: ${colors.lt_blue};
  position: relative;
  left: 0;
  z-index: 1;
  align-items: flex-start;
  ${media.medium`  
    position: fixed;
    height: 100vh;
    top: 0;
    pointer-events: none;
    line-height: .8;
    justify-content: space-between;
    padding-left: 4vmin;
  `}
`

const Age = styled.div`
  ${flexColumn};
`

const PhotoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 70vmin;
    width: 100%;
    height: auto;
    display: block;
    flex-grow: 0;
  }
`