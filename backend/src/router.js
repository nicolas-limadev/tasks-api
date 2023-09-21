const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateTitle,tasksController.createTask);
router.put('/tasks/:id', 
    tasksMiddleware.validateTitle, 
    tasksMiddleware.validateStatus, 
    tasksController.updateTask
);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
