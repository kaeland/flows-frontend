const machine = (state = [], action) => {
  switch (action.type) {
    case "ADD_MACHINES":
      return [...action.machines] 
    default:
      return state;
  }
};

export default machine 