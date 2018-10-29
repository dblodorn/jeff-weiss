import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setHeaderState } from './../state/actions'
import { Section, StyledMarkup } from './../styles/components'
import { absoluteTopFull, flexCenteredAll } from './../styles/mixins'
import { heights, shared, spacing, colors } from './../styles/theme.json'

class NotFound extends Component {
  componentWillMount() {
    this.props.menu_toggle(true)
  }
  render() {
    return (
      <NotFoundSection>
        <NFWrapper>
          <StyledMarkup className={'text'} dangerouslySetInnerHTML={{ __html:
            `<p>Sorry this content cannot be found.</p>`
          }}/>
          <Link to={'/'}><span>Return Home.</span></Link>
        </NFWrapper>
      </NotFoundSection>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setHeaderState(bool))
  })
)(NotFound)

const NotFoundSection = styled(Section)`
  ${absoluteTopFull};
  ${flexCenteredAll};
`

const NFWrapper = styled.div`
  width: 100%;
  max-width: ${shared.max_width};
  min-height: 50vh;
  max-height: calc(80vh - ${heights.header});
  cursor: pointer;
  padding: ${spacing.double_pad};
  * {
    color: ${colors.white};
  }
`