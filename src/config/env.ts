type NodeEnvironment = "development" | "production" | "test";

export interface Environment {
  NODE_ENV: NodeEnvironment;
  PORT: number;
  MONGO_URI: string;
}

export const loadEnvironment = (): Environment => {
  const nodeEnv = process.env.NODE_ENV ?? "development";
  const port = Number(process.env.PORT ?? 3000);
  const mongoUri = process.env.MONGO_URI?.trim();

  if (!["development", "production", "test"].includes(nodeEnv)) {
    throw new Error("NODE_ENV must be development, production, or test.");
  }

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be a valid integer between 1 and 65535.");
  }

  if (!mongoUri) {
    throw new Error("MONGO_URI is required. Add it to your environment configuration.");
  }

  return {
    NODE_ENV: nodeEnv as NodeEnvironment,
    PORT: port,
    MONGO_URI: mongoUri,
  };
};
