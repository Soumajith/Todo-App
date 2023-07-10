const Todo = require("../models/todo");

exports.deleteTodo = async (request, response) => {
  try {
    const id = request.params.id;
    await Todo.findByIdAndDelete(id);

    response.status(200).json({
      success: true,
      message: "Todo Deleted",
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
