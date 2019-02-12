const chart = (state = [], action) => {
  switch (action.type) {
    case "LOAD_CHART_DATA":
      return action.data;
    default:
      return state;
  }
};

export default chart;
