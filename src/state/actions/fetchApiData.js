import fetchWpDataController from './../../controllers/fetchWpDataController'
import { parseTaxonomies } from './../../scripts'
import { heights, spacing, fonts, colors, shared, breakpoints } from './../../styles/theme.json'
import { setHeaderState, setFooterState } from './a_window_data'

export function apiData(payload) {
  return {
    type: 'API_DATA',
    payload
  }
}

export function taxonomyData(payload) {
  return {
    type: 'TAXONOMY_DATA',
    payload
  }
}

export function themeData(payload) {
  return {
    type: 'THEME_DATA',
    payload
  }
}

const themes = {
  theme_a: {
    header_color: colors.white,
    pad_wrapper: colors.yellow,
    display_font: fonts.display_font_a,
    body_copy_font: fonts.body_copy_font_a
  },
  theme_b: {
    header_color: colors.green,
    pad_wrapper: colors.black,
    display_font: fonts.display_font_b,
    body_copy_font: fonts.body_copy_font_b
  }
}

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      const taxonomies = {
        categories: parseTaxonomies(payload.posts.project, 'taxonomies', 'category'),
        capabilities: parseTaxonomies(payload.posts.project, 'taxonomies', 'capabilities'),
        clients: parseTaxonomies(payload.posts.project, 'taxonomies', 'client'),
        industries: parseTaxonomies(payload.posts.project, 'taxonomies', 'industry')
      }
      dispatch(taxonomyData(taxonomies))
      dispatch(apiData(payload))
      dispatch(themeData(themes))
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}
