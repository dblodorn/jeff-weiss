import React from "react";
import { connect } from "react-redux";
import { Section, GridWrapper } from "./../../../styles/components";
import { PopupGrid } from "./../../../components";
import PostLink from "./PostLink";
import Taxonomies from "./Taxonomies";
import { parseTaxonomies } from "./../../../scripts";

const returnTaxonomies = props => {
  return {
    category: parseTaxonomies(props.post_collection, "taxonomies", "category"),
    capabilities: parseTaxonomies(
      props.post_collection,
      "taxonomies",
      "capabilities"
    ),
    client: parseTaxonomies(props.post_collection, "taxonomies", "client"),
    industry: parseTaxonomies(props.post_collection, "taxonomies", "industry")
  };
};

const PostCollection = props => (
  <Section>
    {props.data.content.show_taxonomies && (
      <Taxonomies
        class={"top"}
        title={"All Taxonomies"}
        taxonomies={returnTaxonomies(props.data.content)}
      />
    )}
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
  </Section>
);

export default connect(state => ({
  api_data: state.api_data
}))(PostCollection);
