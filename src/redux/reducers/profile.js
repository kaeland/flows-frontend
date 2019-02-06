const profile = (state = {}, action) => {
  // debugger; 
  switch (action.type) {
    case "SET_PROFILE":
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default profile;

