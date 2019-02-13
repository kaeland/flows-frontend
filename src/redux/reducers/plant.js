const plant = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_PLANT_STATS":
      return { ...state, ...action.stats };
    default:
      return state;
  }
};

export default plant;
