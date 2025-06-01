console.log("chai aur code ");
require("dotenv").config();
//console.log(process.env); // remove this after you've confirmed it is working
const express = require("express"); // object bana lia
const app = express(); // varibale bana lia app
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("NinjaHatori@98");
});
app.get("/login", (req, res) => {
  res.send("<h1> at login code <h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code<h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
