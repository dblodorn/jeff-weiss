import React from 'react'
import { Carousel, TextOverlay } from './../../../components'
import styled from 'styled-components'
import { returnTextOverlay } from './../../../scripts'
import { SimpleSlider } from './../../../components'

export default (props) =>
  <CarouselWrapper>
    {(!props.data.captions) &&
      <TextOverlay content={`<h2>${(props.data.title !== '') ? props.data.title : props.page_title}</h2>${returnTextOverlay(props)}`}/>
    }
    <SimpleSlider 
      slides={props.data.slides}
      navigation={props.data.controls}
      pagination={props.data.pagination}
      captions={props.data.captions}
      transition_time={props.data.transition_time}
    />
    {/*<Carousel 
      slides={props.data.slides}
      navigation={props.data.controls}
      pagination={props.data.pagination}
      captions={props.data.captions}
      autoplay={props.data.autoplay}
      transition_time={props.data.transition_time}
      count={props.count}
    />*/}
  </CarouselWrapper>

// STYLES
const CarouselWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
`