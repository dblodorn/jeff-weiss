import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { connect } from 'react-redux'
import { StyledLink, NavItem } from './../../styles/components'
import { setMenuState } from './../../state/actions'
import { smallType } from './../../styles/mixins'

const returnLink = (slug, subroute) => {
  if (subroute) {
    return `/${subroute}/${slug}`
  } else {
    return `/${slug}`
  }
}

const Menulink = (props) => {
  return (
    <ThemeProvider theme={themes[props.theme] || themeA}>
      <NavItem className={(`/${props.path}` == `${props.route}`) ? `active ${props.classes}` : props.classes}>
        <NavLink to={returnLink(props.path, props.sub_route)} onClick={() => props.menu_toggle(false)}>
          <span dangerouslySetInnerHTML={{__html: props.page }}/>
        </NavLink>
      </NavItem>
    </ThemeProvider>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(Menulink)

// STYLES
const NavLink = styled(StyledLink)`
  ${smallType}
  * {
    text-align: right!important;
  }
`
