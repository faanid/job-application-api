import mongoose from "mongoose";

type ApplicationStatus =
  | "applied"
  | "resume_received"
  | "resume_viewed"
  | "accepted"
  | "rejected";

type JobType =
  | "full-time"
  | "part-time"
  | "internship"
  | "contract";

type WorkMode =
  | "remote"
  | "on-site"
  | "hybrid";

interface CreateApplicationInput {
  company?: string;
  position: string;
  location: string;
  jobType?: JobType;
  workMode?: WorkMode;
  minSalary?: number;
  maxSalary?: number;
  notes?: string;
}

interface Application {
  company?: string;
  position: string;
  location: string;
  status: ApplicationStatus;
  jobType?: JobType;
  workMode?: WorkMode;
  minSalary?: number;
  maxSalary?: number;
  appliedAt: Date;
  notes?: string;
}

const applicationSchema = new mongoose.Schema<Application>({
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

const Application = mongoose.model<Application>(
  "Application",
  applicationSchema
);

export default Application;