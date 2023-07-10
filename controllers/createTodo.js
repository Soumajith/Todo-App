const Todo = require("../models/todo");

//Route handler

exports.createTodo = async (request, response) => {
  try {
    // Fetch data
    const { title, description } = request.body;
    // create database for data
    const data = await Todo.create({ title, description });
    // create a response
    response.status(200).json({
      success: true,
      data: data,
      message: "Data successfully created",
    });
  } catch (e) {
    console.log(err);
    response.status(500).json({
      success: false,
      data: "Internal Server error",
      message: e.message,
    });
  }
};
