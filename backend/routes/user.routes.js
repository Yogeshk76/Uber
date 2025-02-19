const express = require('express');
const router = express.Router();
const {body} = require('express-validator');  // to validate data
const userController = require('../controllers/user.controller');


router.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
],
  userController.registerUser
);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
],
  userController.loginUser
);

module.exports = router;