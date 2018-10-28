import React from 'react'
import { Carousel } from './../../../components'
import styled from 'styled-components'

export default (props) =>
  <CarouselWrapper>
    <Carousel 
      slides={props.data.slides}
      navigation={props.data.controls}
      pagination={props.data.pagination}
      captions={props.data.captions}
      autoplay={props.data.autoplay}
      transition_time={props.data.transition_time}
      count={props.count}
    />
  </CarouselWrapper>

// STYLES
const CarouselWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
`