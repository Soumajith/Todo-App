const Todo = require("../models/todo");

exports.deleteTodo = async (request, response) => {
  try {
    const id = request.params.id;
    const todo = await Todo.findByIdAndDelete({ _id: id });
  } catch (err) {
    console.log(err);
  }
};
