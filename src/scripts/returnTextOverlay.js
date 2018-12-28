export default (props) => {
  if (props.data.has_text_overlay) {
    return `<br/><p>${props.data.text_overlay_content}</p>`
  } else {
    return ``
  }
}