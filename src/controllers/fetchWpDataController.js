import fetch from 'isomorphic-fetch'
import { wp_endpoint } from './../config.json'

export default () => {
  return new Promise((resolve, reject) => {
    fetch(wp_endpoint, {
      method: 'GET'
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
