const express = require("express");

const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getAllTodo, getTodoById } = require("../controllers/getAllTodo");
const { updateTodo } = require("../controllers/updateTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getAllTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;
