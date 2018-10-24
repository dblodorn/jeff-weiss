import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WebFont from 'webfontloader'
import throttle from 'lodash/throttle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'
import { fetchApiData, setResizeState, hasTouch, fontsLoaded } from './state/actions'
import App from './App'
import config from './config.json'
import { history, store } from './state/store'

mixin(_, {
  throttle: throttle
})

// INITIALIZE STATE
store.dispatch(fetchApiData())

const resizeHandler = () => {
  store.dispatch(setResizeState())
}

resizeHandler()

window.addEventListener('resize', _.throttle(resizeHandler, 50))

window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('touch')
  store.dispatch(hasTouch(true))
  window.removeEventListener('touchstart', onFirstTouch, false)
}, false)

// LOAD FONTS
WebFont.load({
  custom: {
    families: config.fonts,
    urls: ['/assets/fonts.css']
  },
  active: function() {
    store.dispatch(fontsLoaded(true))
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();