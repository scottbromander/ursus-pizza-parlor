import React, { Component } from "react";
import { connect } from "react-redux";

class CustomerPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onNextClick = (event) => {
    this.props.dispatch({ type: "SET_CUSTOMER_INFO", payload: this.state });
    this.props.history.push("/pizza");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>Customer Page</h1>
        <input
          type="text"
          onChange={this.onInputChange("firstName")}
          placeholder="Enter First Name"
        />
        <input
          type="text"
          onChange={this.onInputChange("lastName")}
          placeholder="Enter Last Name"
        />
        {this.props.store.typeReducer === "delivery" && (
          <input
            type="text"
            onChange={this.onInputChange("address")}
            placeholder="Enter Address"
          />
        )}
        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CustomerPage);
