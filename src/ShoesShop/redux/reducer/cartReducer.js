import { CartItem } from "../../model/cartItem.modal";
import {
  ADD_TO_CART,
  CLOSE_CART_MODAL,
  DOWN_CART_QTY,
  OPEN_CART_MODAL,
  REMOVE_CART_ITEM,
  UP_CART_QTY,
} from "../constant/shoeShopConstants";

let stateCart = {
  cart: [],
  isOpened: false,
};

export const cartReducer = (state = stateCart, { type, payload }) => {
  let index;
  switch (type) {
    case OPEN_CART_MODAL:
      return { ...state, isOpened: true };
    case CLOSE_CART_MODAL:
      return { ...state, isOpened: false };
    case ADD_TO_CART:
      // console.log(payload.id);
      let {
        id,
        name,
        alias,
        price,
        description,
        shortDescription,
        quantity,
        image,
      } = payload;
      index = state.cart.findIndex((item) => item.id === id);
      if (index === -1) {
        let newCartItem = new CartItem(
          id,
          name,
          alias,
          price,
          description,
          shortDescription,
          quantity,
          image,
          1
        );
        state.cart = [...state.cart, newCartItem];
      } else {
        state.cart[index].cartQty++;
        state.cart = [...state.cart];
      }
      return { ...state };
    case UP_CART_QTY:
      index = state.cart.findIndex((item) => item.id === payload.id);
      state.cart[index].cartQty++;
      return { ...state, cart: [...state.cart] };
    case DOWN_CART_QTY:
      index = state.cart.findIndex((item) => item.id === payload.id);
      if (state.cart[index].cartQty === 1) {
        state.cart.splice(index, 1);
        return { ...state, cart: [...state.cart] };
      }
      state.cart[index].cartQty--;
      return { ...state, cart: [...state.cart] };
    case REMOVE_CART_ITEM:
      index = state.cart.findIndex((item) => item.id === payload.id);
      state.cart.splice(index, 1);
      return { ...state, cart: [...state.cart] };
    default:
      return { ...state };
  }
};
