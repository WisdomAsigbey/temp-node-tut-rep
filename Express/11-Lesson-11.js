const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorize.js");

// req => middleware => res

// to execute functions in use method, we place them in an array
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log(`server is listening on port 5000...`);
});
