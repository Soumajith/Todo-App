import { router as router } from "express";

const router = router();

const { createTodo } = require("../controllers/createTodo");

router.post("/createTodo", createTodo);

module.exports = router;
