import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { Transition } from 'react-spring'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { ModalWrapper, ModalContentWrapper } from './../../styles/components'
import { absoluteTopFull, buttonInit } from './../../styles/mixins'
import Modal from './Modal'
import Video from './../video/Video'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this._Popup = this._Popup.bind(this)
  }
  _Popup() {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    return (
      <Fragment>
        <VideoPopper onClick={() => this._Popup()}>
          <FitImage src={this.props.thumbnail} fit={'cover'}/>
        </VideoPopper>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <ThemeProvider theme={themes[this.props.theme] || themeA}>
              <Modal>
                <ModalWrapper style={styles}>
                  <Close clickFunction={() => this._Popup()} color={themes[this.props.theme].popup_close_color || themeA.popup_close_color}/>
                  <ModalContentWrapper>
                    <Video coverUrl={this.props.thumbnail} videoUrl={this.props.video_url} autoplay={true} single={true}/>
                  </ModalContentWrapper>
                </ModalWrapper>
              </Modal>
            </ThemeProvider>
          )}
        </Transition>
      </Fragment>
    )
  }
}

VideoModal.propTypes = {
  thumbnail: propTypes.string,
  theme: propTypes.string,
  video_url: propTypes.string
}

export default VideoModal

const VideoPopper = styled.button`
  ${absoluteTopFull};
  ${buttonInit};
`