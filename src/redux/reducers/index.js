const InitialState = {
  meteo: {
    content: null,
  },
  meteoSettimana: {
    content: null,
  },
  luogo: {
    content: [],
  },
};
const mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "METEO_NOW":
      return {
        ...state,
        meteo: {
          ...state.meteo,
          content: action.payload,
        },
      };
    case "WEEK_METEO":
      return {
        ...state,
        meteoSettimana: {
          ...state.meteoSettimana,
          content: action.payload,
        },
      };

    case "SEARCH_CITY":
      return {
        ...state,
        luogo: {
          ...state.luogo,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
