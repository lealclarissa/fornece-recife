const express = require("express");
const router = express.Router();
const controller = require("../controllers/suppliersController");

router.post("/", controller.addSupplier);

module.exports = router;