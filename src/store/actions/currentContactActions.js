import ACTION_TYPES from "./actionTypes";

export const changeInfo = (value) => {
  return {
    type: ACTION_TYPES.CHANGE_INFO,
    payload: value,
  };
};

export const clearInfo = () => {
  return {
    type: ACTION_TYPES.CLEAR_INFO,
  };
};
