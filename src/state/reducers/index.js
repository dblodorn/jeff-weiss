import { combineReducers } from 'redux'
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
  currentPixelState,
  randomColorState
} from './r_window_data'

import { pageState, setVideoState, videoPlayingState } from './r_content-state'

const apiData = (state = false, action) => {
  switch (action.type) {
    case 'API_DATA':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  api_data: apiData,
  resize_state: resizeState,
  scroll_direction: scrollDirectionState,
  current_pixel: currentPixelState,
  color: randomColorState,
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
