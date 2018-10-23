import React from "react";
import { SimpleVideo, FitImage } from "./../../../components";
import styled from "styled-components";
import { heights, spacing, widths } from "./../../../styles/theme.json";
import { fixedHero, halfFixed } from "./../../../styles/mixins";
import TextOverlay from "./TextOverlay";

export default props => {
  return (
    <VideoWrapper>
      {props.data.has_text_overlay && (
        <TextOverlay
          content={props.data}
          theme={props.theme === null ? "a" : props.theme}
        />
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
  height: 56.25vw;
  position: relative;
  max-height: calc(100vh - ${heights.header});
`;
