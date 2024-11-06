import { Router } from "express";
import {
  addEvent,
  deleteEvent,
  getEvent,
  updateEvent,
} from "../controller/event.js";

const eventRouter = Router();

eventRouter.get("/", getEvent);
eventRouter.post("/", addEvent);
eventRouter.put("/", updateEvent);
eventRouter.delete("/", deleteEvent);

export default eventRouter;
