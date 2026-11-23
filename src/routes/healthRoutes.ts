import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", (_req, res) => {
  const isDatabaseConnected = mongoose.connection.readyState === 1;

  res.status(isDatabaseConnected ? 200 : 503).json({
    status: isDatabaseConnected ? "ok" : "unavailable",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    services: {
      database: isDatabaseConnected ? "connected" : "disconnected",
    },
  });
});

export default router;
