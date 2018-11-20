import fetchWpDataController from './../../controllers/fetchWpDataController'
import { parseTaxonomies } from './../../scripts'

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

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      
      // dispatch(taxonomyData(taxonomies))
      console.log(payload)
      dispatch(apiData(payload))
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}
