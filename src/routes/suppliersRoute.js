const express = require("express");
const router = express.Router();
const controller = require("../controllers/suppliersController");

router.post("/", controller.addSupplier);
router.get("/", controller.allSuppliers);
router.put("/:id", controller.updateSupplier);

module.exports = router;