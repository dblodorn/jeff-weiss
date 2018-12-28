import Color from 'color'
import { makeRandomColor, randomArrItem } from './../../scripts'
import { fonts } from './../../config.json'

// RESIZE DATA
const resizeData = (resize_state) => {
  return {
    type: 'RESIZE_STATE',
    resize_state
  }
}

const setMenuState = (bool) => {
  return {
    type: 'MENU_STATE',
    bool
  }
}

const setHeaderState = (bool) => {
  return {
    type: 'HEADER_STATE',
    bool
  }
}

const setHeaderStyle = (string) => {
  return {
    type: 'HEADER_STYLE',
    string
  }
}

const setFooterState = (bool) => {
  return {
    type: 'FOOTER_STATE',
    bool
  }
}

function fontsLoaded (bool) {
  return {
    type: 'FONTS_LOADED',
    bool
  }
}

function hasTouch (bool) {
  return {
    type: 'HAS_TOUCH',
    bool
  }
}

function setModalState (bool) {
  return {
    type: 'MODAL_STATE',
    bool
  }
}

const setScrollDirection = (string) => {
  return {
    type: 'SCROLL_DIRECTION',
    string
  };
}

const setCurrentPixel = (string) => {
  return {
    type: 'SCROLL_PIXEL',
    string
  };
}

const randomColor = (string) => {
  return {
    type: 'RANDOM_COLOR',
    string
  }
}

const randomFont = (string) => {
  return {
    type: 'RANDOM_FONT',
    string
  }
}

const setResizeState = () => {
  return (dispatch) => {
    dispatch(resizeData({
      window_width: window.innerWidth,
      window_height: window.innerHeight
    }))
  }
}

const setRandomColor = () => {
  const pickColor = makeRandomColor()
  return (dispatch) => {
    dispatch(randomColor({
      bright: pickColor,
      regular: pickColor,
      dark: Color(pickColor).darken(0.25).hex(),
      light: Color(pickColor).lighten(0.25).hex(),
      reverse: Color(pickColor).rotate(180).hex()
    }))
  }
}

const setRandomFont = () => {
  return (dispatch) => {
    dispatch(randomFont({
      top_menu: randomArrItem(fonts),
      project_nav: randomArrItem(fonts),
      body_font: randomArrItem(fonts),
      header_font: randomArrItem(fonts)
    }))
  }
}

// EXPORTS
export {
  setResizeState,
  setMenuState,
  fontsLoaded,
  hasTouch,
  setModalState,
  setHeaderState,
  setFooterState,
  setHeaderStyle,
  setScrollDirection,
  setCurrentPixel,
  setRandomColor,
  setRandomFont
}
