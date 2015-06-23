"user script";
var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  sample: String, 
  amazonLink: String
});

module.exports = mongoose.model("Book", BookSchema);
