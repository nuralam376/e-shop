const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post("/", OrderController.postOrder);

module.exports = router;
