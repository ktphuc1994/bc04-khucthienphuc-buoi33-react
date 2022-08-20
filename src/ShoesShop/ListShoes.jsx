import React, { Component } from "react";
import { connect } from "react-redux";
import ShoeItem from "./ShoeItem";

class ListShoes extends Component {
  render() {
    return (
      <div className="container flex flex-wrap mx-auto">
        {this.props.shoeList.map((item, index) => {
          return (
            <div key={item.id.toString() + index} className="w-1/4 p-5">
              <ShoeItem shoeItem={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { shoeList: state.shoeListReducer.shoeList };
};

export default connect(mapStateToProps, null)(ListShoes);
