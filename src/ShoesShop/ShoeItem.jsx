import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction } from "./redux/action/cartAction";
import { viewDetail } from "./redux/action/shoeListAction";

class ShoeItem extends Component {
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
        <h3 className="text-2xl font-medium mb-4">{name}</h3>
        <p>{shortDescription}</p>
        <p className="text-green-500 my-3">
          Stock: <span className="text-black">{quantity}</span>
        </p>
        <button
          className="px-4 py-2 mb-3 bg-red-500 rounded-full text-white font-semibold"
          onClick={() => {
            this.props.handleViewDetail(this.props.shoeItem);
          }}
        >
          View Details
        </button>
        <div className="flex justify-between px-6">
          <p className="text-lg text-red-600 font-medium">${price}</p>
          <button
            className="px-4 py-2 bg-cyan-500 rounded-full text-white font-semibold"
            onClick={() => {
              this.props.handleAddToCart(this.props.shoeItem);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoeItem) => {
      // console.log(shoeItem.id);
      return dispatch(addToCartAction(shoeItem));
    },
    handleViewDetail: (shoeItem) => {
      return dispatch(viewDetail(shoeItem));
    },
  };
};

export default connect(null, mapDispatchToProps)(ShoeItem);
