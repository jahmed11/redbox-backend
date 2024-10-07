import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { ValidationError as JoiValidationError } from "joi";
import { NotFoundError } from "../utils/errors/NotFoundError";
import { ValidationError } from "../utils/errors/ValidationError";
import logger from "../utils/logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Use logger to record the error
  logger.error(`${err.message} - ${req.method} ${req.url} - ${req.ip}`);

  if (err instanceof mongoose.Error.CastError) {
    res.error("Invalid id", 400);
  }

  if (err instanceof JoiValidationError) {
    // Handle Joi validation errors
    const joiErrorMessage = err.details.map((detail) => detail.message).join(", ");
    res.error(joiErrorMessage, 400);
  } else if (err instanceof NotFoundError || err instanceof ValidationError) {
    res.error(err.message, err.statusCode);
  } else {
    // Generic error handling
    res.error("Internal Server Error");
  }
};
