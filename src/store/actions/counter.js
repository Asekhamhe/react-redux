import * as actionTypes from "./actionTypes";

// Action creator
export const increment = () => ({
  type: actionTypes.actionTypes.INCREMENT,
});

export const decrement = () => ({
  type: actionTypes.DECREMENT,
});

export const add = (value) => ({
  type: actionTypes.ADD,
  value,
});

export const subtract = (value) => ({
  type: actionTypes.SUBTRACT,
  value,
});