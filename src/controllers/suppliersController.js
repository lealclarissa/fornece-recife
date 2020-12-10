const nodemon = require("nodemon");
const suppliers = require("../models/suppliersSchema");

const addSupplier = (req, res) => {
  console.log(req.body);

  const supplier = new suppliers.suppliersModel(req.body);

  supplier.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message, message: "FAIL" });
    }
    res
      .status(201)
      .send({ status: true, message: "Fornecedor cadastrado com sucesso" });
  });
};

const allSuppliers = (req, res) => {
  console.log(req.url);
  suppliers.suppliersModel.find(function (error, suppliers) {
    if (error) {
      res.status(500).send({ message: error.message, message: "FAIL" });
    }
    res.status(200).send(suppliers);
  });
};

module.exports = { addSupplier, allSuppliers };
