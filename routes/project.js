import { Router } from "express";
import { addProject, getProject } from "../controller/project.js";
const projectRouter = Router();

projectRouter.get("/", getProject);
projectRouter.post("/", addProject);

export default projectRouter;
