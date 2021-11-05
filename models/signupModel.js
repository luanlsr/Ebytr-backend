const connection = require('../config/connection');

const signupModel = async ({name, email, password}) => {
  const db = await connection()
  const result = await db.collection('users').insertOne({ name, email, password })

  return {
    id: result.insertedId,
    name,
    email
  }
}

module.exports = { 
  signupModel,
};
