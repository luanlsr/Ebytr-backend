const {loginModel} = require('../models/loginModel');

const login = async ({email}) =>{
  const result = await loginModel({ email })
  return result;
}

module.exports = { 
  login
};
