const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/details', controller.getDetails);
router.post('/createdetail', controller.addDetail);
router.post('/updatedetail', controller.updateDetail);
router.post('/deletedetail', controller.deleteDetail);

module.exports = router; 