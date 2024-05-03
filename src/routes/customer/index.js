const express = require("express");
const customer = require("../../controllers/customer");
const router = express.Router();
// add
router.post("/", customer.postAdd);
// read form
router.get("/", customer.getAdd);

module.exports = router;