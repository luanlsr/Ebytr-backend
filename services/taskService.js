const model = require('../models/taskModel');
// const userModel = require('../models/loginModel')

const createTask = async ({name, task, status}) => {
  // const user = await userModel.loginModel()
  const result = await model.createTask({name, task, status })
  return result 
}

const getTask = async () => {
  const result = await model.getTask()
  return result
}

const getTaskById = async (id) => {
  const result = await model.getTaskById(id)
  return result
}

const updateTask = async ({id, task, status}) => {
  const result = await model.updateTask({id, task, status})
  return result
}

const deleteTask = async (id) => {
  const result = await model.deleteTask(id)
  return result
}
module.exports = { 
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask
};
