import { styling } from './../../config.json'

const resizeState = (state = {}, action) => {
  switch (action.type) {
    case 'RESIZE_STATE':
      return action.resize_state
    default:
      return state
  }
}

const menuState = (state = false, action) => {
  switch (action.type) {
    case 'MENU_STATE':
      return action.bool
    default:
      return state
  }
}

const headerState = (state = true, action) => {
  switch (action.type) {
    case 'HEADER_STATE':
      return action.bool
    default:
      return state
  }
}

const headerStyle = (state = styling.header_style, action) => {
  switch (action.type) {
    case 'HEADER_STYLE':
      return action.string
    default:
      return state
  }
}

const footerState = (state = true, action) => {
  switch (action.type) {
    case 'FOOTER_STATE':
      return action.bool
    default:
      return state
  }
}

const modalState = (state = false, action) => {
  switch (action.type) {
    case 'MODAL_STATE':
      return action.bool
    default:
      return state
  }
}

const fontState = (state = false, action) => {
  switch (action.type) {
    case 'FONTS_LOADED':
      return action.bool
    default:
      return state
  }
}

const touchState = (state = false, action) => {
  switch (action.type) {
    case 'HAS_TOUCH':
      return action.bool
    default:
      return state
  }
}

export {
  resizeState,
  menuState,
  fontState,
  touchState,
  modalState,
  headerStyle,
  headerState,
  footerState
}
