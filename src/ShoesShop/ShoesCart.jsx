import React, { Component } from "react";
import { connect } from "react-redux";
import {
  downCartQty,
  removeCartItem,
  upCartQty,
} from "./redux/action/cartAction";
import { CLOSE_CART_MODAL } from "./redux/constant/shoeShopConstants";

class ShoesCart extends Component {
  renderTbody = () => {
    return this.props.cart.map((item, index) => {
      let { id, image, name, price, cartQty } = item;
      return (
        <div
          key={index.toString() + id}
          className="bg-white border-b hover:bg-gray-50 flex items-center text-lg"
        >
          <p className="w-1/12 py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
            {index + 1}
          </p>
          <div className="w-2/12 py-4 px-4">
            <img
              src={image}
              alt=""
              style={{ width: `80px` }}
              className="mx-auto"
            />
          </div>
          <p className="w-3/12 py-4 px-4">{name}</p>
          <p className="w-1/12 py-4 px-4">{price}</p>
          <p className="w-2/12 py-4 px-4">
            <i
              className="cursor-pointer fa-regular fa-square-minus text-2xl"
              onClick={() => {
                this.props.handleCartQtyDown(item);
              }}
            ></i>
            <span className="mx-2">{cartQty}</span>
            <i
              className="cursor-pointer fa-regular fa-square-plus text-2xl"
              onClick={() => {
                this.props.handleCartQtyUp(item);
              }}
            ></i>
          </p>
          <p className="w-2/12 py-4 px-4">{price * cartQty}</p>
          <p className="w-1/12 py-4 px-4">
            <i
              className="cursor-pointer fa-regular fa-trash-can text-red-500 text-2xl"
              onClick={() => {
                this.props.handleRemoveCartItem(item);
              }}
            ></i>
          </p>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div className="container max-w-screen-lg fixed top-[5vh] left-1/2 -translate-x-2/4 pt-[3.5rem] z-10">
          <div className="overflow-x-auto shadow-md sm:rounded-b-lg max-h-[calc(90vh-3.5rem)] overflow-auto">
            <div className="w-full text-left text-gray-500">
              <div className="cart-header text-gray-700 uppercase bg-gray-300 sm:rounded-t-lg absolute w-full top-0">
                <div className="flex items-center text-center font-bold">
                  <p className="w-1/12 py-3 px-4">STT</p>
                  <p className="w-2/12 py-3 px-4">Hình ảnh</p>
                  <p className="w-3/12 py-3 px-4">Tên</p>
                  <p className="w-1/12 py-3 px-4">Giá</p>
                  <p className="w-2/12 py-3 px-4">Số lượng</p>
                  <p className="w-2/12 py-3 px-4">Tổng cộng</p>
                  <p className="w-1/12 py-3 px-4">
                    <i
                      className="fa-solid fa-xmark text-2xl cursor-pointer"
                      onClick={this.props.handleCloseCart}
                    ></i>
                  </p>
                </div>
              </div>
              <div className="cart-body text-center">
                {this.props.cart.length !== 0 ? (
                  this.renderTbody()
                ) : (
                  <p className="bg-white border-b py-4 px-6 text-xl text-center">
                    Giỏ hàng trống
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-gray-800/70"
          onClick={this.props.handleCloseCart}
        ></div>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return { cart: state.cartReducer.cart };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleCartQtyUp: (shoeDetail) => {
      dispatch(upCartQty(shoeDetail));
    },
    handleCartQtyDown: (shoeDetail) => {
      dispatch(downCartQty(shoeDetail));
    },
    handleRemoveCartItem: (shoeDetail) => {
      dispatch(removeCartItem(shoeDetail));
    },
    handleCloseCart: () => {
      dispatch({
        type: CLOSE_CART_MODAL,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoesCart);
