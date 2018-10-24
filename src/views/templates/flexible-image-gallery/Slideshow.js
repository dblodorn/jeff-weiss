import React from 'react'
import { Carousel } from './../../../components'
import styled from 'styled-components'
import { heights } from './../../../styles/theme.json'

export default (props) =>
  <CarouselWrapper>
    <Carousel 
      slides={props.data.slides}
      navigation={props.data.controls}
      pagination={props.data.pagination}
      captions={props.data.captions}
      autoplay={props.data.autoplay}
      transition_time={props.data.transition_time}
    />
  </CarouselWrapper>

// STYLES
const CarouselWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: ${heights.header};
`