import React,  { Component } from 'react'
import Cropper from 'react-easy-crop'
import styled from 'styled-components'
import { connect } from 'react-redux'

class ZoomImg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: this.props.data.image,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 4 / 3,
    }
    this.onCropChange = this.onCropChange.bind(this)
    this.onCropComplete = this.onCropComplete.bind(this)
    this.onZoomChange = this.onZoomChange.bind(this)
  }

  onCropChange = crop => {
    this.setState({ crop })
  }

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }

  onZoomChange = zoom => {
    this.setState({ zoom })
  }

  render() {
    return (
      <CropWrapper color={this.props.color}>
        <Cropper
          image={this.state.image}
          crop={this.state.crop}
          zoom={this.state.zoom}
          aspect={this.state.aspect}
          onCropChange={this.onCropChange}
          onCropComplete={this.onCropComplete}
          showGrid={false}
          onZoomChange={this.onZoomChange}
          classes={{
            containerClassName: 'zoom-container',
            imageClassName: 'zoom-img', 
            cropAreaClassName: 'zoom-crop-area' 
          }}
      />
        <Controls>
          {/*<input
            type="range"
            min={1}
            max={3}
            value={this.state.zoom}
            aria-labelledby="Zoom"
            onChange={(zoom) => this.onZoomChange(zoom)}
          />*/}
        </Controls>
      </CropWrapper>
    )
  }
}

export default connect(
  state => ({
    color: state.color
  })
)(ZoomImg)

const CropWrapper = styled.div`
  .zoom-crop-area {
    color: ${props => props.color.bright};
    border: 3px solid ${props => props.color.dark};
  }
`

const Controls = styled.div`
  width: 100%;
  display: block;
  height: 6rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9000;
  input {
    width: 100%;
  }
`