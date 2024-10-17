import mongoose from "mongoose";
const Schema = mongoose;
const BlogSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  image_url: {
    type: "string",
  },
  link: {
    type: "string",
  },
  date: {
    type: Date,
    required: true,
  },
});
