import React from 'react'
import { SimpleVideo, FitImage, TextOverlay, Video } from './../../../components'
import styled from 'styled-components'
import { returnTextOverlay } from './../../../scripts'

export default props => {
  return (
    <VideoWrapper>
      { props.data.video_file && <Video videoUrl={props.data.video_file} autoplay={true} /> }
    </VideoWrapper>
  );
};

// STYLES
const VideoWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
`;
