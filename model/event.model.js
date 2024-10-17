import mongoose from "mongoose";
const Schema = mongoose;
const EventSchema = new Schema({
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
});
