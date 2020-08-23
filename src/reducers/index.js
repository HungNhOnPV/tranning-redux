import { combineReducers } from "redux";
import listProducts from "./products";

const myReducer = combineReducers({
  listProducts,
});

export default myReducer;
