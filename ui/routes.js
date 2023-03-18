const controller = require('./controllers');

const express = require('express');

const router = express.Router();

router.get('/#/dashboard/', controller.dashboard);
module.exports = router;

