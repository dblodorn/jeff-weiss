import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setHeaderState } from './../../../state/actions'
import styled from 'styled-components'
import { Section } from './../../../styles/components'
import { media, flexRowWrap } from './../../../styles/mixins'
import { heights, spacing } from './../../../styles/theme.json'
import PostLink from './PostLink'
import shuffle from 'lodash/shuffle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  shuffle: shuffle
})

class PostCollection extends Component {
  componentWillMount() {
    this.props.menu_toggle(true)
  }
  render() {
    return (
      <CollectionSection>
        <CollectionWrapper
          className={`${this.props.data.content.container_width} ${
            this.props.data.content.columns
          }`}
        >
        {this.props.data.content.insert_type === 'curated'
          ? _.shuffle(this.props.data.content.post_collection).map((item, i) => (
              <PostLink
                theme={this.props.data.theme}
                style={this.props.data.content.style}
                slug={item.post_type}
                showTitle={this.props.data.content.show_title}
                linkButton={this.props.data.content.link_button}
                columns={this.props.data.content.columns}
                proportion={this.props.data.content}
                showTaxonomies={this.props.data.content.show_post_taxonomies}
                showThumbnail={this.props.data.content.show_thumbnail}
                cardData={item}
                key={`${item.ID}-post-${i}`}
              />
            ))
          : this.props.api_data && _.shuffle(this.props.api_data.posts.project).map((item, i) => (
              <PostLink
                theme={this.props.data.theme}
                style={this.props.data.content.style}
                slug={'project'}
                showTitle={this.props.data.content.show_title}
                linkButton={this.props.data.content.link_button}
                columns={this.props.data.content.columns}
                proportion={this.props.data.content}
                showTaxonomies={this.props.data.content.show_post_taxonomies}
                showThumbnail={this.props.data.content.show_thumbnail}
                cardData={item}
                key={`${item.ID}-post-${i}`}
              />
            ))}
        </CollectionWrapper>
      </CollectionSection>
    )
  }
}

export default connect(
  state => ({
    api_data: state.api_data
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(PostCollection)

const CollectionSection = styled(Section)`
  padding-top: ${spacing.big_pad};
  padding-bottom: ${spacing.big_pad};
  ${media.desktopNav`
    padding-top: ${heights.header};
  `}
`

const CollectionWrapper = styled.ul`
  ${flexRowWrap};
  width: 100%;
  li {
    width: 100%;
  }
`