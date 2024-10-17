import mongoose from "mongoose";

const DATABASEURL = process.env.MONGODB_URL;
const connectDb = async () => {
  console.log("connecting to database ......");
  try {
    await mongoose.connect(DATABASEURL);
  } catch (error) {
    console.log("error is ", error);
    process.exit(1);
  }
  console.log("Database connected ✌✌");
};

export default connectDb;
