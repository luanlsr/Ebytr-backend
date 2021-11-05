const { Router } = require('express');

const {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controller/taskController');


const validateJWT = require('../auth/validateJWT');
const validateTask = require('../validations/validationTasks');

const routesTask = Router();

routesTask.post('/',validateTask, validateJWT, createTask);
routesTask.get('/', validateJWT, getTask);
routesTask.get('/:id', validateJWT, getTaskById);
routesTask.put('/:id',validateTask, validateJWT, updateTask);
routesTask.delete('/:id', validateJWT, deleteTask);


module.exports = routesTask;
