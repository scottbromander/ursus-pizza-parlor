import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import TypePage from "../Pages/TypePage/TypePage";
import CustomerPage from "../Pages/CustomerPage/CustomerPage";
import PizzaPage from "../Pages/PizzaPage/PizzaPage";
import SummaryPage from "../Pages/SummaryPage/SummaryPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <h1>Pizza!</h1>

          <Route exact path="/" component={TypePage} />
          <Route exact path="/customer" component={CustomerPage} />
          <Route exact path="/pizza" component={PizzaPage} />
          <Route exact path="/summary" component={SummaryPage} />
        </Router>
      </div>
    );
  }
}

export default App;
