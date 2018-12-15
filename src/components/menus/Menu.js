import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MenuLink from './MenuLink'
import { flexRow, flexColumn, flexCenteredAll, media, defaultLink, microType } from './../../styles/mixins'
import { NavItem } from './../../styles/components'
import { spacing } from './../../styles/theme.json'

const Menu = (props) => {
  const buildNav = (data) => {
    return data.map((item, i) => {
      if (!item.is_home && !item.external_link) {
        return (
          <MenuLink page={item.title} path={item.slug} sub_route={item.sub_route} key={`${i}-${item.id}`}/>
        )
      } else if (item.external_link) {
        return (
          <NavItem key={`${i}-${item.id}`}>
            <ExternalLink href={item.url} target='_blank'><span>{item.title}</span></ExternalLink>
          </NavItem>
        )
      }
    })
  }
  return (
    <MenuWrapper className={`${props.orientation} ${props.navLocation}`}>
      <NavList className={`${props.orientation} ${props.navLocation}`}>
        {props.children}
        {(props.api_data) && buildNav(props.api_data.menus[props.location].items)}
      </NavList>
    </MenuWrapper>
  )
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Menu)

// STYLES
const MenuWrapper = styled.menu`
  height: 100%;
  padding-bottom: .5rem;
  ${media.desktopNav`
    margin-left: auto;
    padding-bottom: 0;
  `}
`

const NavList = styled.ul`
  ${flexColumn};
  position: relative;
  text-align: left;
  ${media.desktopNav`
    ${flexRow};
    align-items: center;
    height: 100%;
    padding: 0;
    margin: 0;
    padding-inline-start: 0;
  `}
`

const ExternalLink = styled.a`
  ${defaultLink};
  ${microType};
`
