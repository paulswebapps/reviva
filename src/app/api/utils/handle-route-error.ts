import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res
      .status(400)
      .json({ message: "Validation error", errors: err.errors });
  }

  console.error(err); // Log the error for debugging

  // Handle other types of errors
  res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
