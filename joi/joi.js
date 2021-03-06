const Joi = require('joi');

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const taskSchema = Joi.object({
  task: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = { 
  signupSchema,
  loginSchema,
  taskSchema
};