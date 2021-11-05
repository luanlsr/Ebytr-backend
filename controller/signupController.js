const { StatusCodes: { CREATED, INTERNAL_SERVER_ERROR } } = require('http-status-codes');
// const rescue = require('express-rescue');
const service = require('../services/signupService')

const signup = async (req, res, next) => {
  try {
    const {name, email, password} = req.body
    const result = await service.signup({name, email, password})
    res.status(CREATED).json(result)

  } catch (error) {
    next({statusCode: INTERNAL_SERVER_ERROR, message: error.message })
  }
};

module.exports = {
  signup
}
