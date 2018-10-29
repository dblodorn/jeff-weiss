import React from 'react'
import { SimpleVideo, FitImage, TextOverlay, Video } from './../../../components'
import styled from 'styled-components'
import { returnTextOverlay } from './../../../scripts'

export default props => {
  console.log(props)
  return (
    <VideoWrapper>
      <TextOverlay content={`<h2>${(props.data.title !== '') ? props.data.title : props.page_title}</h2>${returnTextOverlay(props)}`}/>
      {props.data.media_type !== "photo"
        ? props.data.video_file && <Video videoUrl={props.data.video_file} autoplay={true} />
        : props.data.video_cover_image.large !== null
        ? props.data.video_cover_image.large && (
            <FitImage
              src={props.data.video_cover_image.large}
              fit={"contain"}
            />
          )
        : null
      }
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
