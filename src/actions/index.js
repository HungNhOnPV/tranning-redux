import * as types from "../constants";

export const fetchListTask = (data) => {
  return {
    type: types.FETCH_TASK,
    payload: {
      data,
    },
  };
};

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};
