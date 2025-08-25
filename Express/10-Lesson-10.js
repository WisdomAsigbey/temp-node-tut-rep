const express = require("express");
const app = express();
const logger = require("./logger.js");

// req => middleware => res

// if path is provided in use, the middleware function applies only to paths with the specified route
// it only applies to all requests if path is not specified.
app.use("/api", logger);

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
