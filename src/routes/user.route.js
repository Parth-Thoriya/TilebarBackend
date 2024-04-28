const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller.js');
const { route } = require('..');

router.get('/profile', userController.getUserProfile);
router.get('/', userController.getAllUsers);
//mine
router.post('/profile', userController.updateUserProfile);

module.exports = router;