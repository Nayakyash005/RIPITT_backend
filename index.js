import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import connectDb from "./configuration/db";
import connectDb from "./configuration/db.js";
const app = express();
const PORT = 8801;
const FRONTEND_URL = "http://localhost:3000";

// CORS configuration
const corsOptions = {
  origin: FRONTEND_URL,
  credentials: true,
};
// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(logger);
async function main() {
  await connectDb();
  app.listen(PORT, () => {
    console.log("your backend is live at http://localhost:8801");
  });
}

main();
