import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'
import { setVideoPlaying, setVideoState } from './../../state/actions'
import { buttonInit, opacityTransition, media } from './../../styles/mixins'
import { colors, heights, fonts } from './../../styles/theme.json'

const fmtMSS = (s) => { 
  const fs = (s) => {
    if (isNaN(s)) {
      return 0
    } else {
      return Math.round(s)
    }
  }
  let ms = fs(s)
  return (ms - (ms %= 60)) / 60 + (9 < ms ? ':' : ':0') + ms
}

class Video extends Component {
  state = {
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    started: false,
    buffering: false,
    progress: false
  }

  // LIFECYCLE
  componentWillMount() {
    if (this.props.autoplay) {
      this.onPlay()
    }
  }

  componentWillUnmount() {
    this.setState({
      playing: false,
      started: false
    })
    this.props.video_playing(null)
    this.props.video_state('stopped')
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.url != this.props.current_video) {
      this.props.video_state('stopped')
      this.setState({
        url: null,
        playing: false,
        started: false,
        buffering: false
      })
      this.player.seekTo(0)
    }
  }
  // VIDEO CONTROL HANDLERS
  playPause = () => {
    this.setState({
      playing: !this.state.playing
    })
  }
  stop = () => {
    this.setState({
      url: null,
      playing: false,
      started: false,
      buffering: false,
      loaded: true
    })
    this.props.video_playing(null)
    this.props.video_state('stopped')
  }
  onPlay = () => {
    setTimeout(() => {
      this.setState({
        playing: true,
        started: true
      })
      this.props.video_playing(this.props.videoUrl)
      this.props.video_state('playing')
    }, 1)
  }

  onProgress = state => {
    this.setState({ progress: state })
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }

  onPause = () => {
    this.setState({
      playing: false
    })
    this.props.video_state('paused')
  }
  onEnded = () => {
    this.stop()
  }

  onStart = () => {
    this.setState({
      started: true,
      playing: true,
      buffering: false,
      loaded: true
    })
    this.props.video_state('start')
  }
  
  onBuffer = () => {
    this.setState({
      buffering: true
    })
    this.props.video_state('buffering')
  }
  
  ref = player => {
    this.player = player
  }
  
  render () {
    return (
      <VideoWrapper>
        <ReactPlayer
          url={this.props.videoUrl}
          className='hero-player'
          ref={this.ref}
          width={'100%'}
          height={'auto'}
          playsinline={true}
          volume={this.state.volume}
          playing={this.state.playing}
          onStart={this.onStart}
          onPlay={this.onPlay}
          onBuffer={this.onBuffer}
          onPause={this.onPause}
          onEnded={this.onEnded}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                controls: 1,
                modestbranding: 1,
                rel: 0,
                playsinline: 1
              }
            },
            vimeo: {
              playerVars: {
                showinfo: 0,
                controls: 1
              }
            }
          }}
        />
        <PlayPause onClick={() => this.playPause()} className={(this.state.playing) ? `playing` : `paused`}/>
        <VideoInfo font={this.props.font}>
          <p>{fmtMSS(this.state.playedSeconds)} / {fmtMSS(this.state.duration)}</p>
        </VideoInfo>
      </VideoWrapper>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width,
    current_video: state.current_video,
    font: state.fonts.top_menu
  }),
  dispatch => ({
    video_playing: (url) => dispatch(setVideoPlaying(url)),
    video_state: (url) => dispatch(setVideoState(url))
  })
)(Video)

// STYLES
const VideoWrapper = styled.div`
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
  ${media.desktopNav`
    padding: ${heights.header};
  `}
  .hero-player {
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  video {
    width: 100%;
    height: 100%;
    max-width: 96rem;
    max-height: 70vh;
    margin: auto;
    object-fit: contain;
  }
`;

const PlayPause = styled.button`
  ${buttonInit};
  ${opacityTransition};
  position: fixed;
  left: 1.25rem;
  width: 2rem;
  height: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  opacity: .5;
  bottom: 3.5rem;
  ${media.desktopNav`
    bottom: 1rem;
  `}
  &:hover {
    opacity: 1;
  }
  &.playing {
	  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAz9Awx92LAAAAHUlEQVQI12NgAAH9C9xfGOw/8P8hl9B/wP0DbBIAw7YeyS7eO3sAAAAASUVORK5CYII=);    
  }
  &.paused {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVQ4T6WTQRUCMQxE5zsCJ+AAHICDXQfgAAngABwsDpAACsobXsODwy5tmVMv8zNpEpSVUhokJUlrwO8i8QGwOdQBfQlhDGDvOae5TYGmAPbdJW2BwxjkFyB8x5zGwC+VAiLNEnBrb9UAwrST1AOvNC0A+wZg/g/gCsxaAXtJ3pPqFh6SFq2feJK0iqo1U3DVTesiXXLVplX2nLvaY4oTdq/F5/wEjkFbER1WOmYAAAAASUVORK5CYII=);
  }
`

const VideoInfo = styled.div`
  position: fixed;
  right: .5rem;
  padding: 0 1rem;
  bottom: 3.75rem;
  ${media.desktopNav`
    right: 0;
    bottom: 1.25rem;
  `}
  * {
    text-align: right;
    color: ${colors.white};
    font-family: ${props => props.font};
    font-size: ${fonts.sizes.micro};
  }
`
