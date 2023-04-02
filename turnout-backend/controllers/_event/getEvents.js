const { Event } = require("../../models/Event");
const getEvents = async (req, res) => {
  try {
    const programId = req.query.programId;
    const events = await Event.find({ programId: programId });
    return res.status(200).json({ events: events });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getEvents,
};
