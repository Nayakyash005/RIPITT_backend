import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
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
  industry: {
    type: "string",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
