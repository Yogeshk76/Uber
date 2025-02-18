const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const {validationResult} = require('express-validator');

//logic to create user
module.exports.registerUser = async (req,res,next) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {firstname, lastname, email, password} = req.body;

  const hashedPassword = await userModel.hashpassword(password);

  const user = await userService.createUser({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({token, user});
}

