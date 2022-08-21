import React, { Component } from "react";
import { connect } from "react-redux";
import { hideLongString } from "../utils/utils";
import {
  addToCartAction,
  downCartQty,
  upCartQty,
} from "./redux/action/cartAction";
import { viewDetail } from "./redux/action/shoeListAction";

class ShoeItem extends Component {
  renderAddToCartQtyButton = () => {
    let item = this.props.shoeItem;
    let index = this.props.cart.findIndex((shoe) => shoe.id === item.id);
    // return <p>{index}</p>;
    if (index === -1)
      return (
        <button
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 duration-300 rounded-full text-white font-semibold"
          onClick={() => {
            this.props.handleAddToCart(item);
          }}
        >
          Add to Cart
        </button>
      );
    return (
      <p className="flex items-center mr-3">
        <i
          className="cursor-pointer fa-regular fa-square-minus text-2xl"
          onClick={() => {
            this.props.handleCartQtyDown(item);
          }}
        ></i>
        <span className="mx-2 text-xl">{this.props.cart[index].cartQty}</span>
        <i
          className="cursor-pointer fa-regular fa-square-plus text-2xl"
          onClick={() => {
            this.props.handleCartQtyUp(item);
          }}
        ></i>
      </p>
    );
  };
  render() {
    let { name, price, shortDescription, quantity, image } =
      this.props.shoeItem;
    return (
      <div
        className="p-5"
        style={{
          boxShadow:
            "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
        }}
      >
        <img src={image} alt="" />
        <h3 className="text-2xl font-medium mb-4">
          {hideLongString(name, 20)}
        </h3>
        <p>{shortDescription}</p>
        <p className="text-green-500 my-3">
          Stock: <span className="text-black">{quantity}</span>
        </p>
        <button
          className="px-4 py-2 mb-3 bg-red-500 hover:bg-red-600 duration-300 rounded-full text-white font-semibold"
          onClick={() => {
            this.props.handleViewDetail(this.props.shoeItem);
          }}
        >
          View Details
        </button>
        <div className="flex justify-between items-center px-6">
          <p className="py-3 text-xl text-red-600 font-medium">${price}</p>
          {this.renderAddToCartQtyButton()}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoeItem) => {
      // console.log(shoeItem.id);
      return dispatch(addToCartAction(shoeItem));
    },
    handleViewDetail: (shoeItem) => {
      return dispatch(viewDetail(shoeItem));
    },
    handleCartQtyUp: (shoeDetail) => {
      dispatch(upCartQty(shoeDetail));
    },
    handleCartQtyDown: (shoeDetail) => {
      dispatch(downCartQty(shoeDetail));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeItem);
