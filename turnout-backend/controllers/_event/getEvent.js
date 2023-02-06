const { Event } = require("../../models/Event");

const getEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);
    if (event) {
      return res.status(200).json({ event: event });
    } else {
      return res.status(500).json({ message: "Cannot find event." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEvent,
};
