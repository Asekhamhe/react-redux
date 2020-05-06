import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const ResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: [...state.results, action.result],
      });

    case actionTypes.DELETE_RESULT:
      return updateObject(state, {
        results: state.results.filter((_, index) => index !== action.id),
      });
    default:
      return state;
  }
};

export default ResultReducer;
