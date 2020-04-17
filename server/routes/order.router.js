const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);

  const queryString = `INSERT INTO "orders" 
  (customer_first_name, customer_last_name, customer_address, order_type, pizza_order)
  VALUES ($1,$2,$3,$4,$5)`;

  const address = req.body.customer_address
    ? req.body.customer_address
    : "pickup";

  let pizzas = "";

  for (let pizza of req.body.pizzas) {
    pizzas += `${pizza.size} ${pizza.toppings},`;
  }

  pool
    .query(queryString, [
      req.body.customer_first_name,
      req.body.customer_last_name,
      address,
      req.body.order_type,
      pizzas,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
