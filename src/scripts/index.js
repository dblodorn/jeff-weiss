import routeName from './routeName'
import parseTaxonomies from './parseTaxonomies'
import scrollWatcher from './scrollWatcher'

const returnTextOverlay = (props) => {
  if (props.data.has_text_overlay) {
    return `<br/><p>${props.data.text_overlay_content}</p>`
  } else {
    return ``
  }
}

export {
  routeName,
  parseTaxonomies,
  scrollWatcher,
  returnTextOverlay
}
