import mongoose from "mongoose";
const DATABASEURL =
  "mongodb+srv://brijendra:FCVY928u6kHpguiz@cluster0.kipuqkw.mongodb.net/ripitt/";
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
