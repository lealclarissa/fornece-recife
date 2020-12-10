const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.post("/", controller.addProduct);

module.exports = router;