import * as types from "../constants";

let initialState = {
  listProducts: [],
};

let myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      const { data } = action.payload;
      return { ...state, listProducts: data };
    }
    default:
      return { ...state };
  }
};

export default myReducers;
