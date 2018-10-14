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

const setResizeState = () => {
  return (dispatch) => {
    dispatch(resizeData({
      window_width: window.innerWidth,
      window_height: window.innerHeight
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
  setHeaderStyle
}
