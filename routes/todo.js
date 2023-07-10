const express = require("express");

const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getAllTodo, getTodoById } = require("../controllers/getAllTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getAllTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
