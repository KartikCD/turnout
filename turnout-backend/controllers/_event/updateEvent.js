const { Event } = require("../../models/Event");

const updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = req.body;
    const newEvent = await Event.findByIdAndUpdate(id, { $set: event });
    return res.status(200).json({ event: newEvent });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  updateEvent,
};
