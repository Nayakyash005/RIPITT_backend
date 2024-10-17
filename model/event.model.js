import mongoose from "mongoose";
const Schema = mongoose;
const EventSchema = new Schema({
  description: {
    type: "string",
    require: true,
  },
  title: {
    type: "string",
    require: true,
  },
  image_url: {
    type: "string",
    require: false,
  },
  link: {
    type: "string",
    // require:true,
  },
  startDate: {
    type: Date,
    required: true, // If you want it to be mandatory
  },
});
