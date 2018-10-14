import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Section, GridWrapper } from './../../../../styles/components'
import { Video, PlayButton, FitImage, VideoModal } from './../../../../components'
import { absoluteTopFull, flexCenteredAll, halfFixed } from './../../../../styles/mixins'
import { colors } from './../../../../styles/theme.json'
import VideoCard from './VideoCard'

const MapInline = (props) => 
    props.data.video_collection.map((item, i) =>
      <VideoCard item={item} overflow={((props.data.container_width === 'fixed_left') || (props.data.container_width === 'fixed_right'))  ? true : false} key={item.post_id + 'vg' + i}>
        <Video coverUrl={item.thumbnail} videoUrl={item.video_url}/>
      </VideoCard>
    )

const MapPermalink = (props) => 
  props.data.video_collection.map((item, i) =>
    <VideoCard item={item} overflow={((props.data.container_width === 'fixed_left') || (props.data.container_width === 'fixed_right')) ? true : false} key={item.post_id + 'vg' + i}>
      <VideoLink to={`/video/${item.slug}`}>
        <PlayButton color={colors.white}/>
        <FitImage src={item.thumbnail} fit={'cover'}/>
      </VideoLink>
    </VideoCard>
  )

const MapPopup = (props) => 
  props.data.video_collection.map((item, i) =>
    <VideoCard item={item} overflow={((props.data.container_width === 'fixed_left') || (props.data.container_width === 'fixed_right'))  ? true : false} key={item.post_id + 'vg' + i}>
      <VideoModal thumbnail={item.thumbnail} video_url={item.video_url} theme={'a'}/>
    </VideoCard>
  )

export default (props) => {
  return (
    <VideoGridSection className={((props.data.container_width === 'fixed_left') || (props.data.container_width === 'fixed_right')) ? props.data.container_width : false }>
      <GridWrapper className={`${props.data.container_width} ${props.data.columns}`}>
        {(props.data.display_method === 'inline')
          ? <MapInline data={props.data}/>
          : (props.data.display_method === 'permalink')
          ? <MapPermalink data={props.data}/>
          : (props.data.display_method === 'popup')
          ? <MapPopup data={props.data}/>
          : null
        }
      </GridWrapper>
    </VideoGridSection>
  )
}

const VideoGridSection = styled(Section)`
  background-color: ${colors.white};
  ${halfFixed};
`

const VideoLink = styled(Link)`
  ${absoluteTopFull};
  ${flexCenteredAll};
`
