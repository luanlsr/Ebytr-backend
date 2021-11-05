const { Router } = require('express');

const {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controller/taskController');


// const validateJWT = require('../auth/validateJWT');

const routesTask = Router();

routesTask.post('/', /*validateJWT,*/ createTask);
routesTask.get('/', /*validateJWT,*/ getTask);
routesTask.get('/:id', /*validateJWT,*/ getTaskById);
routesTask.put('/:id', /*validateJWT,*/ updateTask);
routesTask.delete('/:id', /*validateJWT,*/ deleteTask);


module.exports = routesTask;
