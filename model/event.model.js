import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  description: {
    type: "string",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  image_url: {
    type: "string",
    required: false,
  },
  link: {
    type: "string",
    // required:true,
  },
  startDate: {
    type: Date,
    required: true, // If you want it to be mandatory
  },
  startTime: {
    type: String,// If you want it to be mandatory
  },
  endDate: {
    type: Date,
    required: true, // If you want it to be mandatory
  },
  endTime: {
    type: String, // If you want it to be mandatory
  },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;