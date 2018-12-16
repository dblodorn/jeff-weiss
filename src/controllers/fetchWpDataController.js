import fetch from 'isomorphic-fetch'
import config from './../config.json'

export default () => {
  return new Promise((resolve, reject) => {
    fetch((process.env.NODE_ENV === 'development')
      ? config.dev_endpoint
      : config.wp_endpoint,
      { method: 'GET' })
        .then(res => resolve(res))
        .catch(err => reject(err))
  })
}
