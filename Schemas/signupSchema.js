const mongoose = require('mongoose')
const { Schema } = mongoose;

const signupSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: String,
  password:   String,
});

const Signup = mongoose.model('users', signupSchema);

module.exports = Signup