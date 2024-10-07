import Joi from "joi";

export const createTodoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  completed: Joi.boolean().required(),
});

export const updateTodoSchema = Joi.object({
  title: Joi.string(),
  completed: Joi.boolean(),
  description: Joi.string(),
}).or("title", "description", "completed");


