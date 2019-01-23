import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexRowCenteredVert, media } from './../../styles/mixins'
import { spacing, heights } from './../../styles/theme.json'
import { StyledLink, LogoType } from './../../styles/components'
import { meta_defaults } from './../../config.json'
import { makeRandomColor } from './../../scripts'

const Logo = props => {
  const [colorChoice, setColor] = React.useState(makeRandomColor())
  return (
    <LogoButton to={'/'} className={(props.route === '/') && `active`} onMouseEnter={() => setColor()} onMouseLeave={() => setColor()} color={makeRandomColor()}>
      <LogoType font={props.font}><span>{meta_defaults.title}</span></LogoType>
    </LogoButton>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname,
    font: state.fonts.project_nav
  })
)(Logo)

const LogoButton = styled(StyledLink)`
  ${flexRowCenteredVert};
  padding: ${spacing.single_pad} 0;
  width: 16rem;
  height: ${heights.header};
  position: fixed;
  left: ${spacing.double_pad};
  top: 1rem;
  ${media.desktopNav`
    top: 0;
    left: 0;
    position: relative;
    &:hover {
      span { color: ${props => props.color}!important; }
    }
  `}
`
