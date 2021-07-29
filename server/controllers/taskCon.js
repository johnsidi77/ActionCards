const Task = require('../models/taskMod');

exports.getTasks = async (req, res) => {
  try {
    const Tasks = await Task.find();
    res.send(Tasks);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};


exports.addTask = async (req, res) => {

  const inputReq = req.body;
  try {
    const addedTask = await Task.create( inputReq );

    res.status(201);
    res.send(addedTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};