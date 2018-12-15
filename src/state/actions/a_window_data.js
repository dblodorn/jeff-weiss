import Color from 'color'

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

const setResizeState = () => {
  return (dispatch) => {
    dispatch(resizeData({
      window_width: window.innerWidth,
      window_height: window.innerHeight
    }))
  }
}

const setRandomColor = () => {
  const pickColor = `#${Math.random().toString(16).substr(2, 6)}`
  const desaturateColor = Color(pickColor).desaturate(0.65)
  const newColor = desaturateColor.hex()
  const newColorDark = Color(newColor).darken(0.25).hex()
  const newColorLight = Color(newColor).lighten(0.25).hex()
  return (dispatch) => {
    dispatch(randomColor({
      bright: pickColor,
      regular: newColor,
      dark: newColorDark,
      light: newColorLight
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
  setRandomColor
}
