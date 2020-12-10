const nodemon = require("nodemon");
const products = require("../models/productsSchema");

const addProduct = (req, res) => {
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

const allProducts = (req, res) => {
  console.log(req.url);
  products.productsModel.find(function (error, products) {
    if (error) {
      res.status(500).send({ message: error.message, message: "FAIL" });
    }
    res.status(200).send(products);
  });
};

module.exports = { addProduct, allProducts };
