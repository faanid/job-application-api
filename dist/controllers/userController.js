"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const signup = async (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;
    const user = await userModel_1.default.create({
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
exports.signup = signup;
//# sourceMappingURL=userController.js.map