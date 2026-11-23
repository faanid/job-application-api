import mongoose from "mongoose";

const connectDB = async (mongoUri: string): Promise<void> => {
  await mongoose.connect(mongoUri);
  console.log("MongoDB connection established.");
};

export default connectDB;
