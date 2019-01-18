import React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { ModalWrapper, ModalContentWrapper, MicroP } from './../../../styles/components'
import { colors } from './../../../styles/theme.json'
import { Modal, FitImage, Close, TextOverlay } from './../../../components'
import ZoomImg from './ZoomImg'
import { returnTextOverlay } from './../../../scripts'
import { flexCenteredAll, fullWindow } from '../../../styles/mixins'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this._ImageEnlarge = this._ImageEnlarge.bind(this)
    console.log(this.props.data)
  }

  _ImageEnlarge() {
    this.setState({
      modal: !this.state.modal
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <ZoomDiv>
          <ZoomImgWrapper width={this.props.data.width} height={this.props.data.height}>
            {!this.state.modal && 
              <TextOverlay clickFunction={() => this._ImageEnlarge()} zoom={true} content={`<h2>${(this.props.data.title !== '') ? this.props.data.title : this.props.page_title}</h2><br/>${this.props.data.text_overlay_content}`} />
            }
            <FitImage src={this.props.data.image} fit={'contain'} />
          </ZoomImgWrapper>
        </ZoomDiv>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles =>
            <Modal>
              <ModalWrapper style={styles}>
                <Close clickFunction={() => this._ImageEnlarge()} color={`#ffffff`} size={`3rem`} stroke={3} top={`.65rem`}/>
                <ModalContentWrapper maxHeight={`100vh`}>
                  <ZoomImg data={this.props.data}/>
                </ModalContentWrapper>
              </ModalWrapper>
            </Modal>
          )}
        </Transition>
      </React.Fragment>
    )
  }
}

const ZoomDiv = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  * {
    text-transform: uppercase;
    color: ${colors.white};
  }
`

const ZoomImgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
  max-width: calc(${props => (props.width / 2) * .1}rem - 1px);
  max-height: ${props => (props.height / 2) * .1}rem;
  img {
    padding: 1rem;
  }
`