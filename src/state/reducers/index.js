import { combineReducers } from 'redux'
import { apiData, taxonomyData, themeData } from './apiData'
import { 
  resizeState, 
  menuState, 
  fontState, 
  touchState, 
  modalState, 
  headerStyle,
  headerState,
  footerState
} from './r_window_data'
import { 
  pageState,
  setVideoState,
  videoPlayingState
} from './r_content-state'
import content from './content'
import cart from './r_cart'

const rootReducer = combineReducers({
  cart: cart,
  api_data: apiData,
  themes: themeData,
  taxonomy_data: taxonomyData,
  resize_state: resizeState,
  fonts_loaded: fontState,
  touch_state: touchState,
  modal: modalState,
  menu: menuState,
  header_state: headerState,
  header_style: headerStyle,
  footer_state: footerState,
  content: content,
  page: pageState,
  current_video: setVideoState,
  video_state: videoPlayingState
})

export default rootReducer
