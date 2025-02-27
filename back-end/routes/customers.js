const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customersController");

router.get("/", customerController.getCustomers);
router.get("/", customerController.createCustomers);
router.get("/:id", customerController.deleteCustomers);

module.exports = router;
