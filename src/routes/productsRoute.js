const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.post("/", controller.createProduct);

module.exports = router;