import { kMaxLength } from "buffer";
import mongoose from "mongoose";

type UserRole = "user" | "admin";

interface User {
  name?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: UserRole;
}

interface CreateUserInput {
  name?: string;
  email: string;
  password: string;
  passwordConfirm: string;
} 

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 16,
  },

  passwordConfirm: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;

