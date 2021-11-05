const connection = require('../config/connection');
const { ObjectID } = require('mongodb');

const createTask = async ({name, task, status}) =>{
  const db = await connection();
  const result = await db.collection('todoTask').insertOne({name, task, status })

  return {
    id: result.insertedId,
    name,
    task,
    status,
  };
}

const getTask = async () => {
  const db = await connection();
  const result = await db.collection('todoTask').find().toArray();
  console.log(result);
  return result
}

const getTaskById = async (id) => {
  const db = await connection();
  const result = await db.collection('todoTask').findOne({ _id: ObjectID(id) })
  return result
}


const updateTask = async ({id, task, status}) => {
  const db = await connection();
  await db.collection('todoTask').updateOne({ _id: ObjectID(id) }, {
    $set: {
      task,
      status,
    },
  });
  const find = await getTaskById(id);
  return find;
};

const deleteTask = async (id) => {
  const db = await connection();
  const result = await db.collection('todoTask').deleteOne({ _id: ObjectID(id) });
  return result
  }

module.exports = { 
  createTask, 
  getTask,
  getTaskById,
  updateTask,
  deleteTask
};
