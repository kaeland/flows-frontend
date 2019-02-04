const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, action.user)
    case 'ERROR':
      return Object.assign({}, action.message)
      case 'SIGNOUT':
      return {}
    default: 
      return state
  }
}

export default auth 
