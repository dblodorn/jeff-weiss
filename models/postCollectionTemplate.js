import { posts } from './postCollection.json'

const postCollectionTemplate = {
  template: 'post-collection',
  content: {
    post_list: [
      ...posts
    ]
  }
}

export default postCollectionTemplate