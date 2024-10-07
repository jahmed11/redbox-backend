import { Request, Response, NextFunction } from "express";
import Joi from "joi";

/**
 * Middleware to validate request data against a Joi schema.
 */
export const validateRequest =
  (schema: Joi.ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!schema) {
      return next();
    }

    try {
      const validationOptions = {
        errors: {
          wrap: { label: "" },
        },
        abortEarly: false,
      };

      let data;
      if (req.method === "GET") {
        data = { ...req.query, ...req.params };
      } else {
        data = req.body;
      }

      const result = await schema.validateAsync(data, validationOptions);

      if (req.method === "GET") {
        req.query = result;
      } else {
        req.body = result;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
