const express = require("express");
const customer = require("../../controllers/customer");
const router = express.Router();
// add
router.post("/", customer.add);
// read 
router.get("/", customer.get);

module.exports = router;