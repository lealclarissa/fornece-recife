const nodemon = require("nodemon");
const { productsModel } = require("../models/productsSchema");
const products = require("../models/productsSchema");

const createProduct = (req, res) => {
  console.log(req.body);

  const product = new products.productsModel(req.body);

  product.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message, message: "FAIL" });
    }
    res
      .status(201)
      .send({ status: true, message: "Produto cadastrado com sucesso" });
  });
};

module.exports = { createProduct };