import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { ModalWrapper, ModalContentWrapper, ZoomImgWrapper, ZoomDiv } from './../../../styles/components'
import { Modal, FitImage, TextOverlay } from './../../../components'
import ZoomImg from './ZoomImg'
import { setRandomColor } from './../../../state/actions'

class ZoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this._ImageEnlarge = this._ImageEnlarge.bind(this)
  }

  _ImageEnlarge() {
    this.props.color()
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
                <ModalContentWrapper maxHeight={`100vh`}>
                  <ZoomImg data={this.props.data} clickFunction={() => this._ImageEnlarge()}/>
                </ModalContentWrapper>
              </ModalWrapper>
            </Modal>
          )}
        </Transition>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    color: () => dispatch(setRandomColor())
  })
)(ZoomModal)
