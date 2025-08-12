const express = require("express");
const router = express.Router();

const salesRoutes = require("./salesDashboard.route");

router.use("/sales", salesRoutes);

module.exports = router;