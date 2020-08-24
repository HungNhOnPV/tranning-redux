import * as types from "../constants";

export const fetchListTask = (data = []) => {
  return {
    type: types.FETCH_TASK,
    payload: {
      data,
    },
  };
};

export const searchText = (text = "") => {
  return {
    type: types.SEARCH_TEXT,
    payload: {
      text,
    }
  };
};

export const searchType = (type = "") => {
  return {
    type: types.SEARCH_TYPE,
    payload: {
      type,
    }
  };
};

export const searchStar = (star = 0) => {
  return {
    type: types.SEARCH_STAR,
    payload: {
      star,
    }
  };
};

export const showProducts = (products = []) => {
  return {
    type: types.SHOW_PRODUCTS,
    payload: {
      products,
    }
  };
};
