import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import screenfull from 'screenfull'
import Color from 'color'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { setVideoPlaying, setVideoState } from './../../state/actions'
import { buttonInit, opacityTransition, flexRowCenteredVert, media, flexRow } from './../../styles/mixins'
import { StyledRangeSlider } from './../../styles/components'
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
  constructor(props){
    super(props)
    this.state = {
      url: null,
      playing: true,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      started: false,
      buffering: false,
      progress: false,
      seeking: false,
      fullscreen: false,
    }
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
    this.onFullScreen = this.onFullScreen.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
  }

  // LIFECYCLE
  componentWillMount() {
    if (this.props.autoplay) {
      this.onPlay()
    }
  }

  componentWillUnmount() {
    this.setState({
      playing: true,
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
      this.setState({ fullscreen: false })
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
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onFullScreen = e => {
    screenfull.request(ReactDOM.findDOMNode(this.player.wrapper.children[0]))
  }
  ref = player => {
    this.player = player
  }
  render () {
    return (
      <VideoWrapper>
        <VideoInner>
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
              file: {
                attributes: {
                  controls: this.state.fullscreen
                }
              }
            }}
          />
          <Seek className={`seeker`}>
            <StyledRangeSlider
              type='range' 
              min={0}
              max={1}
              step='any'
              value={this.state.played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
              rangebg={this.props.color.dark}
              thumbbg={Color(this.props.color.light).darken(0.1).hex()}
              progressbg={this.props.color.light}
            />
          </Seek>
        </VideoInner>
        <FullScreenButton onClick={() => this.onFullScreen()} font={this.props.font}>
          <span>Full Screen</span>
        </FullScreenButton>
        <VideoFooter font={this.props.font}>
          <PlayPause onClick={() => this.playPause()} className={(this.state.playing) ? `playing` : `paused`}/>
          <VideoInfo>
            <p>{fmtMSS(this.state.playedSeconds)} / {fmtMSS(this.state.duration)}</p>
          </VideoInfo>
        </VideoFooter>
      </VideoWrapper>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width,
    current_video: state.current_video,
    font: state.fonts.top_menu,
    color: state.color
  }),
  dispatch => ({
    video_playing: (url) => dispatch(setVideoPlaying(url)),
    video_state: (url) => dispatch(setVideoState(url))
  })
)(Video)

// STYLES
const Seek = styled.div`
  ${flexRowCenteredVert};
  ${opacityTransition};
  width: 100%;
  height: 1rem;
  opacity: 0;
`

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

const VideoInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 96rem;
  max-height: 70vh;
  margin: 0 auto 1rem;
  position: relative;
  &:hover {
    .seeker {
      opacity: 1;
    }
  }
`

const VideoFooter = styled.div`
  ${flexRow};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 2rem;
  align-items: flex-end;
  justify-content: space-between;
  *,
  button {
    color: ${colors.white};
    font-family: ${props => props.font};
    font-size: ${fonts.sizes.micro};
  }
`

const FullScreenButton = styled.button`
  ${buttonInit};
  width: 20rem;
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  padding: 2rem;
  color: ${colors.white};
  font-family: ${props => props.font};
  font-size: ${fonts.sizes.micro};
  z-index: 1000;
  ${opacityTransition};
  opacity: .5;
  text-transform: uppercase;
  &:hover {
    opacity: 1;
  }
`

const PlayPause = styled.button`
  ${buttonInit};
  ${opacityTransition};
  width: 2rem;
  height: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  opacity: .5;
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
  ${opacityTransition};
  opacity: .5;
  text-transform: uppercase;
  &:hover {
    opacity: 1;
  }  
  * {
    text-align: right;
  }
`
