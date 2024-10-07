import { Router } from "express";
import { TodoController } from "../controller/todoController";
import { TodoService } from "../services/todoServices";
import { createTodoSchema, updateTodoSchema } from "../validations/todoSchema";
import { validateRequest } from "../services/commonService";

const todoService = new TodoService();
const todoController = new TodoController(todoService);

const router = Router();


router.get("/tasks", todoController.getAllTodos);
router.post("/tasks", validateRequest(createTodoSchema), todoController.createTodo);
router.put("/tasks/:id", validateRequest(updateTodoSchema), todoController.updateTodo);
router.delete("/tasks/:id", todoController.deleteTodo);

export default router;
