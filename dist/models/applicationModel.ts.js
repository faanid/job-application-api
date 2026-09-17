"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const applicationSchema = new mongoose_1.default.Schema({
    company: {
        type: String,
    },
    position: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: [
            "applied",
            "resume_received",
            "resume_viewed",
            "accepted",
            "rejected",
        ],
        default: "applied",
    },
    jobType: {
        type: String,
        enum: ["full-time", "part-time", "internship", "contract"],
    },
    workMode: {
        type: String,
        enum: ["remote", "on-site", "hybrid"],
    },
    minSalary: {
        type: Number,
    },
    maxSalary: {
        type: Number,
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
    notes: {
        type: String,
    },
});
const Application = mongoose_1.default.model("Application", applicationSchema);
exports.default = Application;
//# sourceMappingURL=applicationModel.ts.js.map