const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "firstname must be at least 3 character long"],
    },
    lastname: {
      type: String,
      minlength: [3, "lastname must be at least 3 character long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "color must be at least 3 character long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "color must be at least 3 character long"],
    },
    capacity: {
        type: Number,
        require: true,
        min: [1, 'Capacity must be least 1'],
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ["car", "motorcycle", "auto"],
    }
  },

  location: {
    latitude: {
        type: Number,
    },
    longitude: {
        tye: Number
    }
  }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;