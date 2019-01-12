import { store } from './../state/store'
import { setScrollDirection, setCurrentPixel } from './../state/actions'

export default () => {

  const threshold = 15

  const directionHandler = (string) => {
    store.dispatch(setScrollDirection(string))
  }

  store.dispatch(setCurrentPixel(0))

  const documentHeight = () => {
    const html = document.querySelector('html')
    const doc = html.getBoundingClientRect().height - store.getState().resize_state.window_height
    return doc
  }

  let top = false
  let bottom = false
  let scrollPixel = window.pageYOffset
  let scrollTime = 0

  const looper = () => {
    const newPixel = window.pageYOffset
    const diff = newPixel - scrollPixel
    const speed = diff * 1.125
    const docHeight = documentHeight()
    
    if (speed > diff) {
      scrollTime = scrollTime + 1
      if (scrollTime === threshold) {
        directionHandler('down')
        store.dispatch(setCurrentPixel(scrollPixel))
        top = false
        bottom = false
      }
    } else if (speed < diff) {
      scrollTime = scrollTime + 1
      if (scrollTime === threshold) {
        directionHandler('up')
        store.dispatch(setCurrentPixel(scrollPixel))
        top = false
        bottom = false
      }
    } else {
      scrollTime = 0
    }
    scrollPixel = newPixel
    if (docHeight > store.getState().resize_state.window_height) {
      store.dispatch(setCurrentPixel(scrollPixel))
      if (scrollPixel === 0 && (store.getState().scroll_direction !== 'at-top')) {
        if (!top) {
          directionHandler('at-top')
          store.dispatch(setCurrentPixel(scrollPixel))
          top = true
          bottom = false
        }
      } else if (scrollPixel === docHeight && (store.getState().scroll_direction !== 'at-bottom')) {
        if (!bottom) {
          directionHandler('at-bottom')
          store.dispatch(setCurrentPixel(scrollPixel))
          top = false
          bottom = true
        }
      }
    }
    requestAnimationFrame(looper)
  }
  looper()
}
