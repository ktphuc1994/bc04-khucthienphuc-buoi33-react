import { dataShoe } from "../../data/data_shoe";
import { CLOSE_VIEW_DETAIL, VIEW_DETAILS } from "../constant/shoeShopConstants";

const stateShoeList = {
  shoeList: dataShoe,
  shoeDetail: {},
};

export let shoeListReducer = (state = stateShoeList, { type, payload }) => {
  switch (type) {
    case VIEW_DETAILS:
      return { ...state, shoeDetail: payload };
    case CLOSE_VIEW_DETAIL:
      return { ...state, shoeDetail: {} };
    default:
      return { ...state };
  }
};
