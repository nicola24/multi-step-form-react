const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/form', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

// find all users
const getUsers = () => User.find();

// find one user based on email
const getUserEmail = eml => User.find({ email: eml });

// find one user based on phone number
const getUserPhone = phn => User.find({ phone: phn });

// create one user
const createUser = usr => User.create(usr);

// delete a user
// const deleteUser = (id, cb) => User.findByIdAndDelete(id, cb);

module.exports = {
  getUsers,
  getUserEmail,
  getUserPhone,
  createUser,
  // deleteUser,
  // updateUser,
};
