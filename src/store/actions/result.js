import * as actionTypes from "./actionTypes";

export const saveResult = (result) => ({
  type: actionTypes.STORE_RESULT,
  result,
});

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => ({
  type: actionTypes.DELETE_RESULT,
  id,
});
