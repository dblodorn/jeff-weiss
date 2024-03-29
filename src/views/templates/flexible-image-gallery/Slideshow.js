import React from 'react'
import styled from 'styled-components'
import { returnTextOverlay } from './../../../scripts'
import { SimpleSlider, TextOverlay } from './../../../components'

export default props =>
  <CarouselWrapper>
    {(props.data.has_text_overlay && !props.data.captions) &&
      <TextOverlay slideshow={(props.data.slides.length > 1) && `multi-slideshow`} content={`<h2>${(props.data.title !== '') ? props.data.title : props.page_title}</h2>${returnTextOverlay(props)}`}/>
    }
    <SimpleSlider 
      slides={props.data.slides}
      captions={props.data.captions}
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