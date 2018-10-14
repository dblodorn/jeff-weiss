import React, { Component } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Waypoint from 'react-waypoint'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this._wayPointEnter = this._wayPointEnter.bind(this)
    this._wayPointLeft = this._wayPointLeft.bind(this)
    this._onPlay = this._onPlay.bind(this)
    this._stop = this._stop.bind(this)
    this._pause = this._pause.bind(this)
  }

  _wayPointEnter() {
    this._onPlay()
  }

  _wayPointLeft() {
    this._pause()
  }
  
  _onPlay() {
    this.player.seekTo(0)
    this.setState({
      playing: true
    })
  }

  _stop() {
    this.player.seekTo(0)
    this.setState({
      playing: false
    })
  }

  _pause() {
    this.setState({
      playing: false
    })
  }

  _playPause() {
    this.setState({
      playing: !this.state.playing
    })
  }
  
  componentDidMount() {
    this._onPlay()
  }

  componentWillUnmount() {
    this._stop()
  }

  render() {
    return (
      <VideoWrapper onClick={() => this._playPause()}>
        <ReactPlayer
          ref={node => { if (node) this.player = node.player }}
          url={this.props.src}
          className='hero-player'
          width={'100%'}
          height={'100%'}
          muted={true}
          loop={true}
          playsinline={true}
          playing={this.state.playing}
        />
        <Waypoint
          onEnter={this._wayPointEnter}
          onLeave={this._wayPointLeft}
          topOffset='50%'
        />
      </VideoWrapper>
    )
  }
}

// STYLES
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`