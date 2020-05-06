import * as actionTypes from "./actionTypes";

// action creators
export const saveResult = (result) => {
  const updatedResult = result * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: updatedResult,
  };
};

// HTTP request should be set in action creator
export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      dispatch(saveResult(result));
      // console.log(oldCounter);
    }, 2000);
  };
};

export const deleteResult = (id) => ({
  type: actionTypes.DELETE_RESULT,
  id,
});
