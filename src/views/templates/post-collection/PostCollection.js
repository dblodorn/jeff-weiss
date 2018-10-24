import React from "react"
import { connect } from "react-redux"
import styled from 'styled-components'
import { Section, GridWrapper } from "./../../../styles/components"
import { heights, spacing } from './../../../styles/theme.json'
import { PopupGrid } from "./../../../components"
import PostLink from "./PostLink"

const PostCollection = props => (
  <CollectionSection>
    {props.data.content.popup_grid ? (
      <PopupGrid
        images={props.data.content.post_collection}
        width={props.data.content.container_width}
        columns={props.data.content.columns}
        proportion={props.data.content.thumbnail_proportion}
        collectionType={"post-collection"}
      />
    ) : (
      <GridWrapper
        className={`${props.data.content.container_width} ${
          props.data.content.columns
        }`}
      >
        {props.data.content.insert_type === "curated"
          ? props.data.content.post_collection.map((item, i) => (
              <PostLink
                theme={props.data.theme}
                style={props.data.content.style}
                slug={item.post_type}
                showTitle={props.data.content.show_title}
                linkButton={props.data.content.link_button}
                columns={props.data.content.columns}
                proportion={props.data.content}
                showTaxonomies={props.data.content.show_post_taxonomies}
                showThumbnail={props.data.content.show_thumbnail}
                cardData={item}
                key={`${item.ID}-post-${i}`}
              />
            ))
          : props.api_data &&
            props.api_data.posts.project.map((item, i) => (
              <PostLink
                theme={props.data.theme}
                style={props.data.content.style}
                slug={"project"}
                showTitle={props.data.content.show_title}
                linkButton={props.data.content.link_button}
                columns={props.data.content.columns}
                proportion={props.data.content}
                showTaxonomies={props.data.content.show_post_taxonomies}
                showThumbnail={props.data.content.show_thumbnail}
                cardData={item}
                key={`${item.ID}-post-${i}`}
              />
            ))}
      </GridWrapper>
    )}
  </CollectionSection>
)

export default connect(state => ({
  api_data: state.api_data
}))(PostCollection)

const CollectionSection = styled(Section)`
  padding-top: ${heights.header};
  padding-bottom: ${spacing.big_pad};
`