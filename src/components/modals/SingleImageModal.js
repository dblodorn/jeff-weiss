import React, { Fragment, Component } from 'react'
import { Transition } from 'react-spring'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { ModalWrapper, ModalContentWrapper } from './../../styles/components'
import Modal from './Modal'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'

class SingleImageModal extends Component {
    constructor(props) {
      super(props)
      this.state = {
        modal: false
      }
      this._ImageEnlarge = this._ImageEnlarge.bind(this)
    }
  
    _ImageEnlarge() {
      this.setState({
        modal: !this.state.modal
      })
    }

    render() {
      return (
        <Fragment>
          <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={'contain'}/>
          <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
            {this.state.modal && (styles => 
              <Modal>
                <ThemeProvider theme={themes[this.props.theme] || themeA}>
                  <ModalWrapper style={styles}>
                    <Close clickFunction={() => this._ImageEnlarge()} color={themes[this.props.theme].popup_close_color || themeA.popup_close_color}/>
                    <ModalContentWrapper maxHeight={'50rem'}>
                      <FitImage clickFunction={() => this._ImageEnlarge()} src={this.props.src} fit={'contain'}/>
                    </ModalContentWrapper>
                  </ModalWrapper>
                </ThemeProvider>
              </Modal>
            )}
          </Transition>
        </Fragment>
    )
  }
}

export default SingleImageModal
