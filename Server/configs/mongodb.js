import mongoose, { mongo } from "mongoose";

//Connect to MongoDB Database
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/mentora`);
};

export default connectDB;
