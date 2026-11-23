import express from "express";
import AppError from "./utils/appError";
import errorMiddleware from "./middleware/errorMiddleware";
import healthRoutes from "./routes/healthRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.disable("x-powered-by");

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false, limit: "10kb" }));

app.use("/health", healthRoutes);
app.use("/api/v1/users", userRoutes);

app.use((_req, _res, next) => {
  next(new AppError("Route not found.", 404));
});

app.use(errorMiddleware);

export default app;
