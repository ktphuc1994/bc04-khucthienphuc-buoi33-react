import React, { Component } from "react";
import { connect } from "react-redux";
import { OPEN_CART_MODAL } from "./redux/constant/shoeShopConstants";
import ListShoes from "./ListShoes";
import ShoesCart from "./ShoesCart";
import ShoeDetail from "./ShoeDetail";
import "./shoeShop.css";

class ShoesShop extends Component {
  renderCartQty = () => {
    if (this.props.cart.length !== 0) {
      return (
        <div className="cart-quantity absolute top-1/2 left-1/2 w-6 h-6 bg-white border-2 border-orange-500 rounded-full">
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-5 text-orange-500">
              {this.props.cart.length}
            </span>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div
          className="fixed top-4 right-4 w-16 h-16 bg-gradient overlay-slash rounded-full flex items-center justify-center cursor-pointer"
          onClick={this.props.handleOpenCart}
        >
          <span className="fa-solid fa-cart-shopping text-3xl"></span>
          {this.renderCartQty()}
        </div>
        {this.props.isCartOpened && <ShoesCart />}
        <ListShoes />
        <ShoeDetail />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isCartOpened: state.cartReducer.isOpened,
    cart: state.cartReducer.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleOpenCart: () => {
      dispatch({
        type: OPEN_CART_MODAL,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoesShop);
