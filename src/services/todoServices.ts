import models from "../schema";
import { ITodo } from "../schema/todo";
const { Todo } = models;

export class TodoService {
  todoMapper(todo: ITodo) {
    return {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    };
  }

  public async getAllTodos(): Promise<ITodo[]> {
    const todos = await Todo.find().sort({ createdAt: -1 });

    return todos.map(this.todoMapper) as ITodo[];
  }

  public async getTodoById(id: string): Promise<ITodo | null> {
    return Todo.findById(id);
  }

  public async createTodo(data: Partial<ITodo>): Promise<ITodo> {
    const todo = new Todo(data);
    const todoResponse = await todo.save();

    return this.todoMapper(todoResponse) as ITodo;
  }

  public async updateTodo(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    const todo = await Todo.findByIdAndUpdate(id, data, { new: true });

    if (todo) {
      return this.todoMapper(todo) as ITodo;
    }

    return null;
  }

  public async deleteTodo(id: string): Promise<ITodo | null> {
    return Todo.findByIdAndDelete(id);
  }
}
