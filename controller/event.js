import Event from "../model/event.model.js";
import { tryCatch } from "../lib/util.js";

export const addEvent = async (req, res) => {
  const { description, title, image_url, link, startDate } = req.body;

  if (!description || !title || !startDate)
    res.json({ success: false, message: "missing required feilds" });

  const data = await Event.create({
    description,
    title,
    image_url,
    link,
    startDate: new Date(startDate),
  });

  res.json({ success: true, data });
};

export const deleteEvent = async (req, res) => {
  const { id } = req.body;
  if (id) await Event.deleteOne({ _id: id });
  res.json({ success: true });
};

export const updateEvent = tryCatch(async (req, res) => {
  const { id, description, title, image_url, link, startDate } = req.body;
  const data = await Event.updateOne(
    { _id: id },
    {
      description,
      title,
      image_url,
      link,
      startDate: startDate ? new Date(startDate) : undefined,
    }
  );
  res.json({ success: true, data });
});

export const getEvent = tryCatch(async (req, res) => {
  const { id } = req.body;
  let data;

  if (id) {
    data = await Event.findById(id);
  } else {
    data = await Event.find();
  }

  return res.json({ success: true, data });
});
