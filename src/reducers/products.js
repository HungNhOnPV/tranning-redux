import * as types from "../constants";

let initialState = {
  listProducts: [],
  carts: [],
  text: "",
  type: "",
  star: 0,
};

let myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      const { data } = action.payload;
      return { ...state, listProducts: data };
    }
    case types.SEARCH_TEXT: {
      const { text } = action.payload;
      return { ...state, text: text };
    }
    case types.SEARCH_TYPE: {
      const { type } = action.payload;
      return { ...state, type: type };
    }
    case types.SEARCH_STAR: {
      const { star } = action.payload;
      return { ...state, star: star };
    }
    case types.SHOW_PRODUCTS: {
      const { products } = action.payload;
      return { ...state, carts: products };
    }
    default:
      return { ...state };
  }
};

export default myReducers;
