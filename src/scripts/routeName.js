import capitalize from 'lodash/capitalize'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  capitalize: capitalize
})

export default function(path) {
  let routeClass = ''
  let title = ''

  // Format BodyClass
  switch (path) {
    case '/':
      routeClass = 'home'
      break
    case '/design':
    case '/art':
      routeClass = 'project'
      break
    case '/video':
      routeClass = 'video'
      break
    case '/about':
      routeClass = 'about'
      break
    default:
      routeClass = '404'
      break
  }

  const returnTitle = (route) => {
    const data = route.split('/')
    if (data.length === 2) {
      const title = data[1]
      return title.replace(/\//g, '').replace(/-/g, ' ')
    } else if (data.length === 3) {
      const title = data[2]
      return title.replace(/\//g, '').replace(/-/g, ' ')
    }
  }

  // Format PageTitle
  switch (path) {
    case '/':
      title = 'home'
      break
    default:
      title = returnTitle(path)
  }

  return {
    routeClass,
    routeTitle: _.capitalize(title)
  }
}
