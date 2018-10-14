import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import LazyLoad from 'react-lazyload'
import { FitImage } from './../../../components'
import { P, PadWrapper, ButtonLink, ProportionWrapper } from './../../../styles/components'
import { bigType, flexColumn, media, flexRowWrap } from './../../../styles/mixins'
import { spacing, shared, widths } from './../../../styles/theme.json'
import Taxonomies from './Taxonomies'

export default (props) =>
    <CardWrapper className={`${props.columns} ${props.style}`}>
      {(props.cardData.thumbnail && props.showThumbnail) && 
        <ThumbnailWrapper
          className={`${props.columns} ${props.style}`}
          Desktop={props.proportion.thumbnail_proportion}
          Mobile={props.proportion.thumbnail_proportion_mobile}
          Max={props.proportion.thumbnail_proportion_max}
        >
          <LazyLoad height='100%'>
            <FitImage src={props.cardData.thumbnail} fit={'cover'}/>
          </LazyLoad>
        </ThumbnailWrapper>
      }
      <ThemeProvider theme={themes[props.theme] || themeA}>
        <CardInfo className={`${props.columns} ${props.style}`}>
          {(props.showTitle) && <ProjectTitle>{props.cardData.title}</ProjectTitle>}
          {(props.cardData.short_description) &&
            <ExcerptWrapper>
              <CardP>{props.cardData.short_description}</CardP>
            </ExcerptWrapper>
          }
          {(props.showTaxonomies) && 
            <Taxonomies title={`${props.cardData.title} : Taxonomies`} taxonomies={props.cardData.taxonomies}/>
          }
          {(props.linkButton) &&
            <LinkWrapper>
              <ButtonLink to={(props.cardData.post_type === 'page') ? `/${props.cardData.slug}` : `/${props.cardData.post_type}/${props.cardData.slug}`}>
                <span>More</span>
              </ButtonLink>
            </LinkWrapper>
          }
        </CardInfo>
      </ThemeProvider>
    </CardWrapper>

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  position: relative;
  &.border {
    border-bottom: ${shared.border_thin};
    ${media.desktopNav`
    &.two_col {
      &:nth-child(odd) {
        border-right: ${shared.border_thin};
      }
    }
    &:last-child {
      border-bottom: 0;
    }
  `}
  }
`

const ThumbnailWrapper = styled(ProportionWrapper)`
  &.border {
    border-bottom: ${shared.border_thin};
  }
`

const ExcerptWrapper = styled.div`
  padding: ${spacing.double_pad};
  background-color: ${props => props.theme.top_bg_color};
`

const ProjectTitle = styled.h3`
  ${bigType};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
  text-transform: ${props => props.theme.display_case};
  background-color: ${props => props.theme.top_bg_color};
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
`

const LinkWrapper = styled(PadWrapper)`
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
  ${media.desktopNav`
    &.one_col {
      height: 100%;
      align-items: center;
    }
  `}
  &.two_col,
  &.three_col,
  &.four_col {
    justify-content: flex-end;
  }
`

const CardP = styled(P)`
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.body_copy_font};
  max-width: ${widths.max_small};
`

const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.top_bg_color};
  ${media.desktopNav`
    ${flexRowWrap};
    justify-content: space-between;
  `}
  &.two_col,
  &.three_col,
  &.four_col {
    ${flexColumn};
  }
`