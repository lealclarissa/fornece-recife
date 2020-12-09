const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productsSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: Array, required: true },
    price: { type: String, required: true },
    payment: { type: Array, required: true },
    available: { type: Boolean, required: true },
    quantity: { type: String, required: true },
    supplier: { type: String, required: true }   
  },
  {
    versionKey: false,
  }
);

const productsModel = mongoose.model("products", productsSchema);

module.exports = { productsModel };