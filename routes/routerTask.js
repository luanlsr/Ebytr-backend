const { Router } = require('express');

const {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controller/taskController');


const validateJWT = require('../auth/validateJWT');

const routesTask = Router();

routesTask.post('/task', validateJWT, createTask);
routesTask.get('/task', validateJWT, getTask);
routesTask.get('/task/:id', validateJWT, getTaskById);
routesTask.put('/task/:id', validateJWT, updateTask);
routesTask.delete('/task/:id', validateJWT, deleteTask);


module.exports = routesTask;
