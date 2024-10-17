import mongoose from "mongoose";
const Schema = mongoose;
const EventSchema = new Schema({
  title: {
    type: "string",
    require: true,
  },
  description: {
    type: "string",
  },
  impact: {
    type: "string",
  },
  date: {
    type: Date,
    required: true,
  },
});
