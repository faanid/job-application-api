import { Request, Response } from "express";
import User from "../models/userModel";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password, passwordConfirm } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
};

