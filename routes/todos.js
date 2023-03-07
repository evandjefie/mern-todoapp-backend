import express from 'express';
import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from "../controllers/todosController.js";
import authorize from '../middleware/authorize.js';

const router = express.Router();

router.get("/:id",authorize, getTodo);

router.get("/",authorize, getTodos);

router.post("/create", authorize, createTodo);

router.put("/update/:id", authorize, updateTodo);

router.delete("/delete/:id", authorize, deleteTodo);


export default router;