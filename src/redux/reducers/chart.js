const chart = (state = [], action) => {
  switch (action.type) {
    case "LOAD_CHART_DATA":
      return action.data;
    case "DATA_UPDATED": 
      return state 
    default:
      return state;
  }
};

export default chart;
