// src/controllers/TodoController.ts
import { Request, Response, NextFunction } from "express";
import { TodoService } from "../services/todoServices";
import { NotFoundError } from "../utils/errors/NotFoundError";

export class TodoController {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  // Get all todos
  public getAllTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todos = await this.todoService.getAllTodos();
      res.success(todos);
    } catch (error) {
      next(error);
    }
  };

  // Create a todo
  public createTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todo = await this.todoService.createTodo(req.body);
      res.success(todo);
    } catch (error) {
      next(error);
    }
  };

  // Update a todo
  public updateTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const todo = await this.todoService.updateTodo(id, req.body);
      if (todo) {
        res.success(todo);
      } else {
        throw new NotFoundError("Todo not found");
      }
    } catch (error) {
      next(error);
    }
  };

  // Delete a todo
  public deleteTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;

      const data = await this.todoService.deleteTodo(id);

      if (data) {
        res.status(204).send();
      } else {
        throw new NotFoundError("Todo with this id not found");
      }
    } catch (error) {
      next(error);
    }
  };
}
