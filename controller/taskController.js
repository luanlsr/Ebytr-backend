const { StatusCodes: { CREATED, INTERNAL_SERVER_ERROR, OK } } = require('http-status-codes');
// const rescue = require('express-rescue');
const service = require('../services/taskService')

const createTask = async (req, res, next) => {
  try {
    const {task, status} = req.body
    const {name} = req.user;
    const result = await service.createTask({name,task, status})
    res.status(CREATED).json(result)

  } catch (error) {
    next({statusCode: INTERNAL_SERVER_ERROR, message: error.message })
  }
};

const getTask = async (req, res, next) => {
  try {
    const result = await service.getTask()
    res.status(OK).json(result)

  } catch (error) {
    next({statusCode: INTERNAL_SERVER_ERROR, message: error.message })
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const {id} = req.params
    const result = await service.getTaskById(id)
    res.status(OK).json(result)

  } catch (error) {
    next({statusCode: INTERNAL_SERVER_ERROR, message: error.message })
  }
};

const updateTask = async (req, res, next) => {
  try {
    const {id} = req.params
    const {task, status} = req.body
    const result = await service.updateTask({id, task, status})
    res.status(OK).json(result)

  } catch (error) {
    next({statusCode: INTERNAL_SERVER_ERROR, message: error.message })
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const {id} = req.params
    const result = await service.deleteTask(id)
    res.status(OK).json(result)

  } catch (error) {
    next({statusCode: INTERNAL_SERVER_ERROR, message: error.message })
  }
};

module.exports = {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask
}
