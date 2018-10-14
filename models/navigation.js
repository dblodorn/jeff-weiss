const navigation = {
  main_nav: [
    {
      id: 0,
      title: 'Homepage',
      slug: 'homepage',
      is_home: true,
      external_link: false
    },
    {
      id: 1,
      title: 'Post Collection',
      slug: 'post-collection',
      is_home: false,
      external_link: false
    },
    {
      id: 2,
      title: 'External Link',
      slug: 'https://wikipedia.org',
      is_home: false,
      external_link: true
    }
  ],
  footer_nav: false
}

export default navigation
