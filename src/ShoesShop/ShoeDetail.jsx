import React, { Component } from "react";
import { connect } from "react-redux";
import { CLOSE_VIEW_DETAIL } from "./redux/constant/shoeShopConstants";

class ShoeDetail extends Component {
  render() {
    if (Object.keys(this.props.shoeDetail).length !== 0) {
      let { image, name, alias, description, quantity, price } =
        this.props.shoeDetail;
      return (
        <>
          <div className="container max-w-screen-lg fixed top-[5vh] left-1/2 -translate-x-2/4 bg-white duration-500 z-10">
            <div className="absolute right-10 top-5">
              <i
                className="fa-solid fa-xmark text-red-500 text-3xl leading-8 cursor-pointer"
                onClick={this.props.handleCloseViewDetail}
              ></i>
            </div>

            <div className="max-h-[90vh] py-8 px-12 overflow-auto text-xl text-start">
              <img src={image} alt="" className="mx-auto" />
              <p className="text-2xl">
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p>
                <span className="font-semibold">Alias:</span> {alias}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-semibold text-green-500">Stock:</span>{" "}
                {quantity}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {price}
              </p>
            </div>
          </div>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-gray-800/70"
            onClick={this.props.handleCloseViewDetail}
          ></div>
        </>
      );
    }
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleCloseViewDetail: () => {
      dispatch({
        type: CLOSE_VIEW_DETAIL,
      });
    },
  };
};

let mapStateToProps = (state) => {
  return {
    shoeDetail: state.shoeListReducer.shoeDetail,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetail);
