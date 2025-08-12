const express = require('express');
const route = express.Router();

const salesDashboard = require('../controllers/salesDashboard.controller')

route.get('/states',salesDashboard.getStates);
route.get('/states-max-min-date/:state',salesDashboard.getMaxMinDates);
route.post('/getDashboardData',salesDashboard.getDashboardData);

module.exports = route;