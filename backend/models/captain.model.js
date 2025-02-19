const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters long'],
    }, 
    lastname: {
      type: String,
      minlength: [3, 'Last name must be at least 3 characters long'],
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  vehicle: {
    color:
    {
      type: String,
      required: true,
      minlength: [3, 'Color must be at least 3 characters long'],
      default: 'white',
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, 'Plate must be at least 3 characters long'],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, 'Capacity must be at least 1'],
    },
    vehichleType: {
      type: String,
      enum: ['car', 'motorcycle', 'auto'],
      default: 'car',
    },
  },
  locaton: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
};

captainSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 10);
};

captainSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;