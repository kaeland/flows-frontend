const nav = (state = { visible: false }, action) => {
  switch (action.type) {
    case 'HIDE_SIDEBAR':
      return Object.assign({}, state, { visible: false })
    case 'SHOW_SIDEBAR':
      return Object.assign({}, state, { visible: true })
    default:
      return state
  }
}

export default nav;