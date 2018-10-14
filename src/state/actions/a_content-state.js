const setPage = (slug) => {
  return {
    type: 'SET_PAGE',
    slug
  }
}

const setVideoPlaying = (url) => {
  return {
    type: 'VIDEO_PLAYING',
    url
  }
}

const setVideoState = (string) => {
  return {
    type: 'VIDEO_STATE',
    string
  }
}

export {
  setPage,
  setVideoPlaying,
  setVideoState
}
