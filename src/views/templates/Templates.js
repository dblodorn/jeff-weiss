import React, { Fragment } from 'react'
import { pageData } from './../../components'
import PostCollectionTemplate from './post-collection/PostCollection'
import FlexibleImageGallery from './flexible-image-gallery/FlexibleImageGallery'
import NotFound from './../NotFound'

export default pageData(props => {
  return (
    <Fragment>
      {props.project.template === "flexible-image-gallery" ? (
        <FlexibleImageGallery data={props.project} style={props.style} />
      ) : (props.project.template === "default") ? (
        <FlexibleImageGallery data={props.project} style={props.style} />
      ) : (!props.project.template) ? (
        <FlexibleImageGallery data={props.project} style={props.style} />
      ) : props.project.template === "post-collection" ? (
        <PostCollectionTemplate data={props.project} style={props.style} />
      ) : (
        <NotFound/>
      )}
    </Fragment>
  )
})

