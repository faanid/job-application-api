import app from "./app";
import dotenv from "dotenv";
import connectDB from "./utils/db";

dotenv.config();
connectDB();

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});