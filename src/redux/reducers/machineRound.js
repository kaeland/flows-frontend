const machineRound = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      return { ...state, [action.id]: action.data };
  }
};

export default machineRound;
