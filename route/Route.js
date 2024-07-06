const Controller = require('../controller/Controller');
const express = require('express');
const route = express.Router();
route.get('/', Controller.index);
route.get('/UNIT1', Controller.UNIT1);



















module.exports = route;
