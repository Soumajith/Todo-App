const Todo = require("../models/todo");

exports.updateTodo = async (request, response) => {
  try {
    const id = request.params.id;
    const { title, description } = request.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    if (!todo) {
      return response.status(404).json({
        success: false,
        data: null,
        message: "Not Found",
      });
    }

    response.status(200).json({
      success: true,
      data: todo,
      message: `Update Todo ${id}`,
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
