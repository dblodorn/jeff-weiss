import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../styles/theme'
import { spacing, heights, shared } from './../styles/theme.json'
import { H1, StyledMarkup, Section, Article } from './../styles/components'
import { media, halfFixed } from './../styles/mixins'
import Head from './utils/Head'

export default (props) => 
  <Fragment>
    <Head title={props.data.title} description={props.data.short_description}/>
    {(props.data.top_content) &&
      <ThemeProvider theme={themes[props.data.theme] || themeA}>
        <PostBasicsSection className={(props.data.container_width === 'fixed_left' || 'fixed_right') ? `${props.data.container_width} ${props.style}` : false}>
          <Article className={props.data.container_width}> 
            <H1>{props.data.title}</H1>
            <StyledMarkup dangerouslySetInnerHTML={{__html: props.data.description }}/>
          </Article>
        </PostBasicsSection>
      </ThemeProvider>
    }
  </Fragment>

// STYLES
const PostBasicsSection = styled(Section)`
  background-color: ${props => props.theme.top_bg_color};
  padding-top: calc(${heights.header} + ${spacing.double_pad});
  padding-bottom: ${spacing.double_pad};
  border-bottom: ${shared.border_thin};
  ${media.desktopNav`
    padding-top: ${spacing.double_pad};
  `}
  ${halfFixed};
`