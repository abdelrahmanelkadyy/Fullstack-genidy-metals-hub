const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, minlength: 5, required: true }
});

module.exports = mongoose.model('User', userSchema);
