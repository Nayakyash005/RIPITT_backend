import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import connectDb from "./configuration/db.js";
import blogRouter from "./routes/blog.js";
import eventRouter from "./routes/event.js";
import projectRouter from "./routes/project.js";

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

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

// Routs
app.use("/api/blog", blogRouter);
app.use("/api/event", eventRouter);
app.use("/api/project", projectRouter);

async function main() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`your backend is live at http://localhost:${PORT}`);
  });
}

main();
