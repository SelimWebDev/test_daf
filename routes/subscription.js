const express = require('express');
const router = express.Router();
const subscriptionCtrl = require('../controllers/subscriptionCtrl.js');

router.get('/', subscriptionCtrl.subscriptionContractList);

module.exports = router;