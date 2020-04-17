import React, { Component } from "react";
import { connect } from "react-redux";

class PizzaPage extends Component {
  state = {
    order: [],
    currentPizza: {
      toppings: "",
      size: "",
    },
  };

  selectToppings = (topping) => (event) => {
    this.setState(
      {
        currentPizza: {
          ...this.state.currentPizza,
          toppings: topping,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  selectSize = (size) => (event) => {
    this.setState(
      {
        currentPizza: {
          ...this.state.currentPizza,
          size: size,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addPizzaToOrder = (event) => {
    this.setState(
      {
        order: [...this.state.order, this.state.currentPizza],
      },
      () => {
        this.clearCurrentPizza();
      }
    );
  };

  clearCurrentPizza() {
    this.setState({
      currentPizza: {
        toppings: "",
        size: "",
      },
    });
  }

  clickNext = (event) => {
    this.props.dispatch({ type: "SET_PIZZA_ORDER", payload: this.state.order });
    this.props.history.push("/summary");
  };

  render() {
    const pizzaArray = this.state.order.map((pizza, index) => {
      return (
        <li key={index}>
          {pizza.size} - {pizza.toppings}
        </li>
      );
    });

    return (
      <div>
        <h1>Pizza Page</h1>

        <h3>
          Current Pizza: {this.state.currentPizza.size}{" "}
          {this.state.currentPizza.toppings}
        </h3>

        <div>
          <button onClick={this.selectToppings("Cheese")}>Cheese</button>
          <button onClick={this.selectToppings("Sausage")}>Sausage</button>
          <button onClick={this.selectToppings("Pepperoni")}>Pepperoni</button>
        </div>

        <div>
          <button onClick={this.selectSize("Small")}>Small</button>
          <button onClick={this.selectSize("Medium")}>Medium</button>
          <button onClick={this.selectSize("Large")}>Large</button>
          <button onClick={this.selectSize("Insane")}>Insane</button>
        </div>

        <div>
          <button onClick={this.addPizzaToOrder}>Add to order!</button>
        </div>

        <ul>{pizzaArray}</ul>

        <div>
          <button onClick={this.clickNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect()(PizzaPage);
