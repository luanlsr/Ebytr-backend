const { Router } = require('express');

const {signup} = require('../controller/signupController');
const {login} = require('../controller/loginController');


const validateSignup = require('../validations/validateSignup');
const validateLogin = require('../validations/validationLogin');


const routesUser = Router();

routesUser.post('/signup', validateSignup, signup);
routesUser.post('/login', validateLogin, login);


module.exports = routesUser;
