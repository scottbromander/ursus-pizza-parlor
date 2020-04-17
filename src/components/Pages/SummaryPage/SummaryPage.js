import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class SummaryPage extends Component {
  submitOrder = (event) => {
    const order = {
      customer_first_name: this.props.store.customerReducer.firstName,
      customer_last_name: this.props.store.customerReducer.lastName,
      customer_address: this.props.store.customerReducer.address,
      order_type: this.props.store.typeReducer,
      pizzas: this.props.store.pizzaReducer,
    };

    axios
      .post("/order", order)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    let orderTypeElement = (
      <div>
        <h2>Delivery order for:</h2>
      </div>
    );

    if (this.props.store.typeReducer === "carryout") {
      orderTypeElement = (
        <div>
          <h2>Pick up order for:</h2>
        </div>
      );
    }

    const pizzaArray = this.props.store.pizzaReducer.map((pizza, index) => {
      return (
        <li key={index}>
          {pizza.size} - {pizza.toppings}
        </li>
      );
    });

    return (
      <div>
        <h1>Summary Page</h1>

        {orderTypeElement}

        <div>
          <h4>
            {this.props.store.customerReducer.firstName}{" "}
            {this.props.store.customerReducer.lastName}
          </h4>
          {this.props.store.customerReducer.address && (
            <h4>{this.props.store.customerReducer.address}</h4>
          )}
        </div>

        <ul>{pizzaArray}</ul>

        <button onClick={this.submitOrder}>Submit Order</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SummaryPage);
