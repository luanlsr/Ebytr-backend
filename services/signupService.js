const {signupModel} = require('../models/signupModel');

const signup = async ({name, email, password}) =>{
  const result = await signupModel({ name, email, password })
  return result
}

module.exports = { 
  signup, 
};
