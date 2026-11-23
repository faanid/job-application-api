import "dotenv/config";
import type { Server } from "node:http";
import mongoose from "mongoose";
import app from "./app";
import { loadEnvironment } from "./config/env";
import connectDB from "./utils/db";

const startServer = async (): Promise<Server> => {
  const env = loadEnvironment();

  await connectDB(env.MONGO_URI);

  const server = app.listen(env.PORT, () => {
    console.log(`API server listening on port ${env.PORT} in ${env.NODE_ENV} mode.`);
  });

  const shutdown = (): void => {
    console.log("Shutdown signal received. Closing the HTTP server.");

    server.close(() => {
      void mongoose.connection.close().finally(() => process.exit(0));
    });
  };

  process.once("SIGINT", shutdown);
  process.once("SIGTERM", shutdown);

  return server;
};

void startServer().catch((error: unknown) => {
  console.error("Failed to start the API server:", error);
  process.exit(1);
});
