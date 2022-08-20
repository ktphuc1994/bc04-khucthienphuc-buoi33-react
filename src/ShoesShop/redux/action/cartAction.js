import {
  ADD_TO_CART,
  DOWN_CART_QTY,
  REMOVE_CART_ITEM,
  UP_CART_QTY,
} from "../constant/shoeShopConstants";

export let addToCartAction = (shoeDetail) => {
  // console.log(this.props.cart);
  return {
    type: ADD_TO_CART,
    payload: shoeDetail,
  };
};

export let upCartQty = (shoeDetail) => {
  return {
    type: UP_CART_QTY,
    payload: shoeDetail,
  };
};

export let downCartQty = (shoeDetail) => {
  return {
    type: DOWN_CART_QTY,
    payload: shoeDetail,
  };
};

export let removeCartItem = (shoeDetail) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: shoeDetail,
  };
};
