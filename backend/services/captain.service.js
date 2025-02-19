const captainModel = require('../models/captain.model');
const { populate } = require('../models/user.model');




module.exports.createCaptain = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType}) => {
  if (!firstname || !email || !password) {
    throw new Error('All fields are required');
  }
  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    }
  });
  return captain;
}