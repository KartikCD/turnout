const { Event } = require("../../models/Event");

const getEvents = async (_req, res) => {
  try {
    const events = await Event.find({});
    return res.status(200).json({ events: events });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getEvents,
};
