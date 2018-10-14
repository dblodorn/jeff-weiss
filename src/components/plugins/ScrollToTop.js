import React from 'react'
import * as Scroll from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { DefaultLink, buttonInit } from './../../styles/components'

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 350
  })
}

export default () =>
  <ScrollButton onClick={scrollToTop}><span>Top</span></ScrollButton>

// STYLES
const ScrollButton = styled.button`
  ${DefaultLink};
  ${buttonInit};
`