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

const updateProduct = (req, res) => {
  const id = req.params.id;

  products.productsModel.find({ id }, function (err, product) {
    if (product.length > 0) {
      products.productsModel.updateOne(
        { id },
        { $set: req.body },
        function (err) {
          if (err) {
            res.status(500).send({ message: err.message });
          }
          res.status(200).send({ message: "Produto atualizado com sucesso!" });
        }
      );
    } else {
      res
        .status(200)
        .send({ message: "Não há produto para ser atualizado com esse id" });
    }
  });
};

const removeProduct = (req, res) => {
  const id = req.params.id;

  products.productsModel.find({ id }, function (err, product) {
    if (product.length > 0) {
      products.productsModel.deleteOne({ id }, function (err) {
        if (err) {
          res.status(500).send({
            message: err.message,
            status: "FAIL",
          });
        }
        res.status(200).send({
          message: "Produto removido com sucesso com banco de dados!",
          status: "SUCCESS",
        });
      });
    } else {
      res.status(200).send({
        message: "Não há produto para ser removido",
        status: "EMPTY",
      });
    }
  });
};

module.exports = { addProduct, allProducts, updateProduct, removeProduct };
