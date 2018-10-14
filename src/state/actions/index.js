import fetchApiData from './fetchApiData'
import { 
  setResizeState,
  setMenuState,
  hasTouch,
  fontsLoaded,
  setModalState,
  setHeaderState,
  setFooterState,
  setHeaderStyle
} from './a_window_data'

import { 
  setPage,
  setVideoPlaying,
  setVideoState
} from './a_content-state'

import {
  updateQuantityInCart,
  removeLineItemInCart,
  handleCartClose,
  handleCartOpen,
  addVariantToCart
} from './a_cart'

export {
  fetchApiData,
  setResizeState,
  setMenuState,
  setHeaderState,
  setPage,
  setVideoPlaying,
  hasTouch,
  fontsLoaded,
  setModalState,
  setVideoState,
  setFooterState,
  setHeaderStyle,
  updateQuantityInCart,
  removeLineItemInCart,
  handleCartClose,
  handleCartOpen,
  addVariantToCart
}
