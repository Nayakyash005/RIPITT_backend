import Project from "../model/project.model.js";
export const addProject = async (req, res) => {
  //code...
  const { title, description, impact, startDate, endDate } = req.body;
  console.log("data for project is ", req.body);
  try {
    const data = await Project.create({
      title,
      description,
      impact,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
    console.log(" a project is created ", data);
    res.status(200).send({ success: true, data });
  } catch (error) {
    console.log("error is ", error);
    res.status(500).send({ success: false, data: [] });
  }
};
export const deleteProject = async () => {
  //code...
};
export const updateProject = async () => {
  // code...
};

export const getProject = async (req, res) => {
  try {
    const data = await Project.find();
    console.log("project us ", data);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log("error is ", error);
    res.status(500).json({ success: false, data: [] });
  }
};
