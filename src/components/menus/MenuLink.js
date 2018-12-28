import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { connect } from 'react-redux'
import { StyledLink, NavItem } from './../../styles/components'
import { navStyle } from './../../styles/mixins'
import { setMenuState } from './../../state/actions'
import { breakpoints } from './../../styles/theme.json'

const returnLink = (slug, subroute) => {
  if (subroute) {
    return `/${subroute}/${slug}`
  } else {
    return `/${slug}`
  }
}

const Menulink = (props) => {
  const menuToggle = () => {
    if (props.resize_state.window_width < breakpoints.desktop) {
      props.menu_toggle(false)
    }
  }
  return (
    <ThemeProvider theme={themes[props.theme] || themeA}>
      <NavItem className={props.classes}>
        <NavLink font={props.font} to={returnLink(props.path, props.sub_route)} onClick={() => menuToggle()} className={(`/${props.path}` == `${props.route}`) && `active`}>
          <span dangerouslySetInnerHTML={{__html: props.page }}/>
        </NavLink>
      </NavItem>
    </ThemeProvider>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname,
    resize_state: state.resize_state,
    font: state.fonts.top_menu
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(Menulink)

// STYLES
const NavLink = styled(StyledLink)`
  ${navStyle};
  font-family: ${props => props.font}!important;
`
