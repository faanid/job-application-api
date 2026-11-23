import type { ErrorRequestHandler } from "express";
import AppError from "../utils/appError";

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const error = err instanceof Error ? err : new Error("An unexpected error occurred.");
  const statusCode =
    error instanceof AppError ? error.statusCode : 500;
  const message =
    error instanceof AppError && error.isOperational
      ? error.message
      : "An unexpected error occurred.";
  const isProduction = process.env.NODE_ENV === "production";

  res.status(statusCode).json({
    status: statusCode >= 500 ? "error" : "fail",
    message: isProduction && statusCode >= 500 ? "Internal server error." : message,
    ...(!isProduction && { stack: error.stack }),
  });
};

export default errorMiddleware;
