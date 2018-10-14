import {
  homeTemplate,
  postCollectionTemplate
} from './templates'

const pages = [
  {
    id: 0,
    title: 'Homepage',
    slug: 'homepage',
    is_home: true,
    ...homeTemplate
  },
  {
    id: 1,
    title: 'Post Collection',
    slug: 'post-collection',
    is_home: false,
    ...postCollectionTemplate
  }
]

export default pages
