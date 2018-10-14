import React from 'react'
import styled from 'styled-components'
import { H3, SmallP } from './../../../styles/components'
import { flexRowWrap } from './../../../styles/mixins'
import { spacing, shared } from './../../../styles/theme.json'

const MapCategories = (props) => 
  <TaxUL>
    {props.list.map((item, i) =>
      <li key={'cat' + i}><SmallP>{item}</SmallP></li>
    )}
  </TaxUL>

export default (props) =>
  <TaxonomyWrapper className={props.class}>
    <H3>{props.title}</H3>
    <TaxColumns>
      <MapCategories list={props.taxonomies.category}/>
      <MapCategories list={props.taxonomies.capabilities}/>
      <MapCategories list={props.taxonomies.client}/>
      <MapCategories list={props.taxonomies.industry}/>
    </TaxColumns>
  </TaxonomyWrapper>

const TaxonomyWrapper = styled.div`
  width: 100%;
  padding: ${spacing.double_pad};
  &.top {
    border-top: ${shared.border_thin};
    border-bottom: ${shared.border_thin};
  }
`

const TaxColumns = styled.div`
  ${flexRowWrap};
`

const TaxUL = styled.ul`
  width: 25%;
`