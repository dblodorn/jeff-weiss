import React, { Component } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { heights, colors, fonts } from './../../styles/theme.json'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      duration: ``
    };
    this._onPlay = this._onPlay.bind(this);
    this._stop = this._stop.bind(this);
    this._pause = this._pause.bind(this);
  }

  _onPlay() {
    this.player.seekTo(0);
    console.log(this.player.getDuration())
    this.setState({
      playing: true,
      duration: this.player.getDuration()
    });
  }

  _stop() {
    this.player.seekTo(0);
    this.setState({
      playing: false
    });
  }

  _pause() {
    this.setState({
      playing: false
    });
  }

  _playPause() {
    this.setState({
      playing: !this.state.playing
    });
  }

  componentDidMount() {
    this._onPlay()
  }

  componentWillUnmount() {
    this._stop();
  }

  render() {
    return (
      <VideoWrapper>
        <ReactPlayer
          ref={node => {
            if (node) this.player = node.player;
          }}
          url={this.props.src}
          className="hero-player"
          muted={false}
          loop={true}
          playsinline={true}
          controls={false}
          playing={this.state.playing}
        />
        <VideoInfo>
          <p>{this.state.duration}</p>
        </VideoInfo>
      </VideoWrapper>
    );
  }
}

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
  padding: ${heights.header};
  .hero-player {
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  video {
    width: 100%;
    height: 100%;
    max-width: 96rem;
    max-height: 80vh;
    margin: auto;
    object-fit: cover;
  }
`;

const VideoInfo = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  bottom: 1.25rem;
  padding: 0 1rem;
  text-align: right;
  color: ${colors.white};
  font-family: ${fonts.body_copy_font_a};
  font-size: ${fonts.sizes.micro};
`
