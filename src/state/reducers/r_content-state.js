const pageState = (state =  null, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.slug
    default:
      return state
  }
}

const setVideoState = (state = null, action) => {
  switch (action.type) {
    case 'VIDEO_PLAYING':
      return action.url
    default:
      return state
  }
}

const videoPlayingState = (state = 'stopped', action) => {
  switch (action.type) {
    case 'VIDEO_STATE':
      return action.string
    default:
      return state
  }
}

export {
  pageState,
  setVideoState,
  videoPlayingState
}