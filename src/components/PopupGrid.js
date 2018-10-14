import React from 'react'
import SingleImageModal from './modals/SingleImageModal'
import LazyLoad from 'react-lazyload'
import { GridWrapper, ProportionWrapper } from '../styles/components'

export default (props) =>
  <GridWrapper className={`${props.width} ${props.columns}`}>
    {props.images.map((item, i) =>
      <li key={i}>
        <ProportionWrapper 
          DeskTop={props.proportion}
          Mobile={props.proportion}
          Max={props.proportion}
        >
          <LazyLoad height='100%'>
            <SingleImageModal src={(props.collectionType === 'post-collection') ? item.thumbnail : item.image.large} theme={'b'}/>
          </LazyLoad>
        </ProportionWrapper>
      </li>
    )}
  </GridWrapper>
