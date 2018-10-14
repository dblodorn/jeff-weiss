import config from './../../config.json'
import theme from './../../styles/theme.json'

const content = {
  ...config,
  style_theme: {
    ...theme
  },
  menu: [
    {
      slug: 'link',
      title: 'link'
    }
  ]
}

export default(state = content) => {
  return state
}
