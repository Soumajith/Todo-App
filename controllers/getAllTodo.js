const e = require("express");
const Todo = require("../models/todo");

exports.getAllTodo = async (request, response) => {
  try {
    // Fetch all todos
    const todos = await Todo.find({});
    //Create response
    response.status(200).json({
      success: true,
      data: todos,
      message: "All of the data are fetched",
    });
  } catch (e) {
    console.log(e);
    response.status(500).json({
      success: false,
      data: e,
      message: e.message,
    });
  }
};

exports.getTodoById = async (request, response) => {
  try {
    const id = request.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return response.status(404).json({
        success: false,
        data: null,
        message: "Not found",
      });
    }

    response.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} found`,
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({
      success: false,
      data: err,
      message: err.message,
    });
  }
};
