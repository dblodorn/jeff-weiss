import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Spinner from './Spinner'
import { absoluteCentered, opacityTransition, absoluteTopFull } from './../../styles/mixins'
import { heights } from './../../styles/theme.json'

class FitImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  handleImageLoaded() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 150)
  }

  render() {
    return (
      <Wrapper>
        <ImgWrapper opacity={(this.state.loaded) ? 1 : 0} onClick={this.props.clickFunction} className={(this.props.clickFunction) && 'hover'}>
          <ImgFit src={this.props.src} onLoad={this.handleImageLoaded.bind(this)} className={this.props.fit || `contain`}/>
        </ImgWrapper>
        {(!this.state.loaded) && <Spinner size={'4rem'} color={this.props.color.dark} stroke={1} /> }
      </Wrapper>
    )
  }
}

export default connect(
  state => ({
    color: state.color
  })
)(FitImage)

// STYLE
const Wrapper = styled.div`
  ${absoluteTopFull};
`

const ImgWrapper = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  opacity: ${props => props.opacity};
  &.hover {
    cursor: pointer;
    &:hover {
      img {
        opacity: .75;
      }
    }
  }
`

const ImgFit = styled.img`
  ${absoluteCentered};
  &.contain {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
  &.cover {
    object-fit: cover;
    width: 100%;
    height: 100%;
    padding: ${heights.header};
  }
`

