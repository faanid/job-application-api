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