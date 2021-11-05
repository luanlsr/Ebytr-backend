const { Router } = require('express');

const {signup} = require('../controller/signupController');
const {login} = require('../controller/loginController');


// const validateSignup = require('./validations/validateSignup');

const routesUser = Router();

routesUser.post('/signup', signup);
routesUser.post('/login', login);


module.exports = routesUser;
