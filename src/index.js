const express = require("express");
const app = express();

//Set up mongoose connection
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://dbAdmin:koira123@tictactoe-r6ana.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// view engine setup
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);
