const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customersController");

router.get("/", customerController.getCustomers);
router.post("/", customerController.createCustomers);
router.delete("/:id", customerController.deleteCustomers);

module.exports = router;
