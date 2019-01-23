import React from 'react'
import styled from 'styled-components'
import { heights } from './../../styles/theme.json'
import { media } from './../../styles/mixins'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.video = React.createRef();
  }

  componentWillMount() {
    setTimeout(() => { this.video.current.play() }, 50)
  }

  render() {
    return (
      <VideoWrapper>
        <div className={'hero-player'}>
          <video ref={this.video} controls autoplay playsinline>
            <source src={this.props.src} type="video/mp4"/>
          </video>
        </div>
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
