const express = require("express");
const { dashboard } = require("../controllers");
const router = express.Router();
const customerRoutes = require('./customer');


router.get("/", dashboard);
//customer
router.use('/customer', customerRoutes);

module.exports = router;
