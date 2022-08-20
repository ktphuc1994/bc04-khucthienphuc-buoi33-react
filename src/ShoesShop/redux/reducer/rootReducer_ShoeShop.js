import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { shoeListReducer } from "./shoeListReducer";

export let rootReducer_ShoeShop = combineReducers({
  cartReducer,
  shoeListReducer,
});
