const express = require("express");
const router = express.Router();
const controller = require("../controllers/suppliersController");

router.post("/", controller.createSupplier);

module.exports = router;