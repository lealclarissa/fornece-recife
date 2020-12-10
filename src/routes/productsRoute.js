const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.post("/", controller.addProduct);
router.get("/", controller.allProducts);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.removeProduct);

module.exports = router;