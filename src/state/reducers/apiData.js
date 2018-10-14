const apiData = (state = false, action) => {
  switch (action.type) {
    case 'API_DATA':
      return action.payload
    default:
      return state
  }
}

const taxonomyData = (state = false, action) => {
  switch (action.type) {
    case 'TAXONOMY_DATA':
      return action.payload
    default:
      return state
  }
}

const themeData = (state = false, action) => {
  switch (action.type) {
    case 'THEME_DATA':
      return action.payload
    default:
      return state
  }
}

export {
  apiData,
  taxonomyData,
  themeData
}
