const round = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ROUNDS":
      return [...action.rounds];
    default:
      return state;
  }
};

export default round;
