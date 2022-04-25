const reducer = (state=[], action) => {
  switch (action.type) {
    case "addname":
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer
