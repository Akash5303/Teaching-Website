const Controller = require('../controller/dashboardController');
const express = require('express');
const route = express.Router();
route.get('/', Controller.index);










module.exports = route;