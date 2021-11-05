const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { signupSchema } = require('../joi/joi');

const validateSignup = rescue(async (req, res, next) => {
  const {name, email, password} = req.body;
  const { error } = signupSchema.validate({name, email, password});
  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });
  next();
});

module.exports = validateSignup;