export default (props) => {
  if (props.data.has_text_overlay) {
    return `<br/>${props.data.text_overlay_content}`
  } else {
    return ``
  }
}