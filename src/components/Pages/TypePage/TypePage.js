import React, { Component } from "react";
import { connect } from "react-redux";

class TypePage extends Component {
  onTypeClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_ORDER_TYPE", payload: type });
    this.props.history.push("/customer");
  };

  render() {
    return (
      <div>
        <h1>TypePage</h1>
        <button onClick={this.onTypeClick("carryout")}>Carry Out</button>
        <button onClick={this.onTypeClick("delivery")}>Delivery</button>
      </div>
    );
  }
}

export default connect()(TypePage);
