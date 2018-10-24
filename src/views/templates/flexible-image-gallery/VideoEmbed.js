import React from "react";
import { SimpleVideo, FitImage } from "./../../../components";
import styled from "styled-components";
import TextOverlay from "./TextOverlay";

export default props => {
  return (
    <VideoWrapper>
      {props.data.has_text_overlay && (
        <TextOverlay content={props.data.text_overlay_content}/>
      )}
      {props.data.media_type !== "photo"
        ? props.data.video_file && <SimpleVideo src={props.data.video_file} />
        : props.data.video_cover_image.large !== null
          ? props.data.video_cover_image.large && (
              <FitImage
                src={props.data.video_cover_image.large}
                fit={"contain"}
              />
            )
          : null}
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
