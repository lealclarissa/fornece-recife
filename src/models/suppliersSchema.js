const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const suppliersSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: Object, required: true },
    contacts: { type: Array, required: true },
    category: { type: Array, required: true },
    delivery: { type: Array, required: true },
    payment: { type: Array, required: true },
    minumum: { type: Boolean, required: true }
  },
  {
    versionKey: false,
  }
);

const suppliersModel = mongoose.model("suppliers", suppliersSchema);

module.exports = { suppliersModel };
