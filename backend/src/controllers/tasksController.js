const tasksModel = require('../models/tasksModel');

const getAll = async (_, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;
    const updatedTask = await tasksModel.updateTask(id, title, status);
    return res.status(204).json(updatedTask);

};

const deleteTask = async (req, res) => {
    const removedTask = await tasksModel.deleteTask(req.params.id);
    return res.status(204).json(removedTask);
};

module.exports = {
    getAll,
    createTask,
    updateTask,
    deleteTask,
};
