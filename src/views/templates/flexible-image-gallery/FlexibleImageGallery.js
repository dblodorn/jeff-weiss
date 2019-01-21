import React from 'react'
import { BackArrow } from './../../../components'
import SlideShow from './Slideshow'
import VideoEmbed from './VideoEmbed'
import Zoom from './Zoom'
import NotFound from './../../NotFound'

export default props =>
  <React.Fragment>
    <BackArrow/>
    {(props.data.content.layout[0] !== null)
      ? <React.Fragment>
          {(props.data.content.layout[0].module === 'simple_slideshow' && props.data.content.layout[0].slides)
            ? <SlideShow data={props.data.content.layout[0]} page_title={props.data.title}/> :
            (props.data.content.layout[0].module === 'single_video_photo')
            ? <VideoEmbed data={props.data.content.layout[0]} page_title={props.data.title}/> : 
            (props.data.content.layout[0].module === 'zoom_image')
            ? <Zoom data={props.data.content.layout[0]} page_title={props.data.title}/> :
            null
          }
        </React.Fragment>
      : <NotFound/>
    }
  </React.Fragment>
