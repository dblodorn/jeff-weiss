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
  footerState,
  scrollDirectionState,
  currentPixelState
} from './r_window_data'
import { 
  pageState,
  setVideoState,
  videoPlayingState
} from './r_content-state'

const rootReducer = combineReducers({
  api_data: apiData,
  taxonomy_data: taxonomyData,
  resize_state: resizeState,
  scroll_direction: scrollDirectionState,
  current_pixel: currentPixelState,
  fonts_loaded: fontState,
  touch_state: touchState,
  modal: modalState,
  menu: menuState,
  header_state: headerState,
  header_style: headerStyle,
  footer_state: footerState,
  page: pageState,
  current_video: setVideoState,
  video_state: videoPlayingState
})

export default rootReducer
