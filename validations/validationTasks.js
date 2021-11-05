const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { taskSchema } = require('../joi/joi');

const validateTask = rescue(async (req, res, next) => {
  const {task, status} = req.body;
  const { error } = taskSchema.validate({task, status});
  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });
  next();
});

module.exports = validateTask;