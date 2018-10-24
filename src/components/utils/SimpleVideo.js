import React, { Component } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this._onPlay = this._onPlay.bind(this);
    this._stop = this._stop.bind(this);
    this._pause = this._pause.bind(this);
  }

  _onPlay() {
    this.player.seekTo(0);
    this.setState({
      playing: true
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
    this._onPlay();
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
          controls={true}
          playing={this.state.playing}
        />
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
  .hero-player {
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  video {
    width: 100%;
    height: 100%;
    max-width: 76rem;
    margin: auto;
    object-fit: contain;
  }
`;
