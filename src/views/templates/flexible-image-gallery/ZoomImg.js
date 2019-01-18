import React,  { Component } from 'react'
import Cropper from 'react-easy-crop'
import Color from 'color'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { StyledRangeSlider } from './../../../styles/components'
import { buttonInit, flexCenteredAll, absoluteCentered } from '../../../styles/mixins'
import debounce from 'lodash/debounce'

const zoom_height = `2rem`
class ZoomImg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: this.props.data.image,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: this.props.data.width / this.props.data.height,
    }
    this.onCropChange = this.onCropChange.bind(this)
    this.onZoomChange = this.onZoomChange.bind(this)
    this.incrementUp = this.incrementUp.bind(this)
    this.incrementDown = this.incrementDown.bind(this)
  }

  onCropChange = crop => {
    this.setState({ crop })
  }

  onZoomChange = e => {
    const val = parseFloat(e.target.value)
    this.setState({ zoom: val })
  }

  incrementUp = debounce((e) => {
    console.log(e, this.state.zoom)
    if (this.state.zoom < 3) {
      const num = 
      this.setState({ zoom: (this.state.zoom + 0.01) })
    }
  }, 50)

  incrementDown = debounce((e) => {
    console.log(e, this.state.zoom)
    if (this.state.zoom > 1) {
      this.setState({ zoom: this.state.zoom - 0.01 })
    }
  }, 50)

  render() {
    return (
      <CropWrapper color={this.props.color} width={this.props.data.width} height={this.props.data.height}>
        <Cropper
          image={this.state.image}
          crop={this.state.crop}
          zoom={this.state.zoom}
          aspect={this.state.aspect}
          onCropChange={this.onCropChange}
          showGrid={false}
          onZoomChange={this.onZoomChange}
          classes={{
            containerClassName: 'zoom-container',
            imageClassName: 'zoom-img', 
            cropAreaClassName: 'zoom-crop-area' 
          }}
      />
        <Controls color={this.props.color}>
          <div className={`zoom-controls`}>
            <ZoomButton color={this.props.color} className={`left`} onClick={(e) => this.incrementDown(e)}/>
            <div className={`zoom-wrapper`}>
              <StyledRangeSlider
                type="range"
                min={1}
                max={3}
                step={0.01}
                value={this.state.zoom}
                onChange={this.onZoomChange}
                rangebg={this.props.color.dark}
                thumbbg={Color(this.props.color.light).darken(0.5).hex()}
                progressbg={this.props.color.light}
                height={zoom_height}
              />
            </div>
            <ZoomButton color={this.props.color} className={`right`} onClick={(e) => this.incrementUp(e)}/>
          </div>
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
  width: 100vw;
  height: 100vh;
  position: relative;
  .zoom-crop-area {
    border: 1px solid ${props => props.color.dark};
    color: ${props => props.color.bright};
    margin: auto;
    max-width: calc(${props => (props.width / 1.25) * .1}rem - 1px);
    max-height: ${props => (props.height / 1.25) * .1}rem;
    overflow: hidden;
  }
`

const Controls = styled.div`
  background-color: ${props => Color(props.color.dark).darken(0.3).hex()};
  background-color: ${props => Color(props.color.dark).darken(0.3).hex()};
  width: 100vw;
  height: calc(${zoom_height} + 1px);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  z-index: 9000;
  .zoom-controls {
    width: calc(100vw - ${zoom_height});
    border-right: 1px solid ${props => props.color.dark};
    height: ${zoom_height};
    position: absolute;
    top: 0;
    left: 0;
  }
  .zoom-wrapper {
    height: 100%;
    position: absolute;
    bottom: 0;
    left: ${zoom_height};
    width: calc(100% - (${zoom_height} * 2));
  }
`

const zoomShared = css`
  ${absoluteCentered};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 1.125rem;
  height: 1.125rem;
  transform: translateY(1px);
`

const ZoomButton = styled.button`
  ${buttonInit};
  ${flexCenteredAll};
  width: ${zoom_height};
  height: ${zoom_height};
  background-color: ${props => Color(props.color.dark).darken(0.3).hex()};
  position: absolute;
  top: 0;
  &.left {
    left: 0;
    &:after {
      content: '';
      ${zoomShared};
      background-image: url('/assets/imgs/zoom-out.svg');
    }
  }
  &.right {
    right: 0;
    &:after {
      content: '';
      ${zoomShared};
      background-image: url('/assets/imgs/zoom-in.svg');
    }
  }
`