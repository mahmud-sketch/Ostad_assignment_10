const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  Name: String,
  Price: String,
  Description: String,
  Created_at: { type: Date, required: true, default: Date.now() },
});

const productsModel = mongoose.model("products", dataSchema);
module.exports = productsModel;
