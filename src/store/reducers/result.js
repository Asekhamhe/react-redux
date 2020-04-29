import * as actionTypes from "../actions";
const initialState = {
  results: [],
};

const ResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, action.result],
      };

    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((_, index) => index !== action.id),
      };
    default:
      return state;
  }
};

export default ResultReducer;
