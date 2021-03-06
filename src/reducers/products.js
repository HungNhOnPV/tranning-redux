import * as types from "../constants";

let initialState = {
  listProducts: [],
  carts: [],
  types: [],
  stars: [],
  brands: [],
  text: "",
  type: "",
  star: 0,
  brand: "",
  now: 0,
};

let myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      const { data, now } = action.payload;
      return { ...state, listProducts: data, now: now };
    }
    case types.FETCH_TYPE: {
      const { data } = action.payload;
      return { ...state, types: data };
    }
    case types.FETCH_STAR: {
      const { data } = action.payload;
      return { ...state, stars: data };
    }
    case types.FETCH_BRAND: {
      const { data } = action.payload;
      return { ...state, brands: data };
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
    case types.SEARCH_BRAND: {
      const { brand } = action.payload;
      return { ...state, brand: brand };
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
