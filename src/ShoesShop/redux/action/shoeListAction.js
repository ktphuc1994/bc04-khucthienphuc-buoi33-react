import { VIEW_DETAILS } from "../constant/shoeShopConstants";

export let viewDetail = (shoeItem) => {
  return {
    type: VIEW_DETAILS,
    payload: shoeItem,
  };
};
