import { combineReducers } from "redux";
import products from "./products";

const myReducer = combineReducers({
  products,
});

export default myReducer;
