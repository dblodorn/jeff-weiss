import React from 'react'
import styled from 'styled-components'
import { heights } from './../../../styles/theme.json'
import { media } from './../../../styles/mixins'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.video = React.createRef();
    this.state = {
      playing: false,
      controls: false
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.video.current.play()
      this.setState({ playing: true })
    }, 100)
  }

  render() {
    return (
      <VideoSection className={this.state.playing && 'playing'}>
        <VideoWrapper>
          <div className={'hero-player'}>
            <video ref={this.video} controls playsInline>
              <source src={this.props.data.video_file} type="video/mp4" />
            </video>
          </div>
        </VideoWrapper>
      </VideoSection>
    );
  }
}

// STYLES
const VideoSection = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
  opacity: 0;
  transition: opacity 250ms ease-in-out 10ms;
  will-change: opacity;
  &.playing {
    opacity: 1;
  }
`;

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
  padding-bottom: 8rem;
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

