const express = require('express');
const { checkUser } = require('../../../middlewares/auth');
const router = express.Router();

router.post('/signup', require('./authSignUpPOST'));

module.exports = router;
