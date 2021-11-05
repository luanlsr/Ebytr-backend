const connection = require('../config/connection');

const loginModel = async ({email}) => {
  const db = await connection();
  const result = await db.collection('users').findOne({ email })

  return result
}

const findOnebyEmail = async (email) => {
  const db = await connection();
  const result = await db.collection('users').findOne({ email })
  return result
}

module.exports = { 
  loginModel,
  findOnebyEmail
};
