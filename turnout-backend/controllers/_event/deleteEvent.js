const { Event } = require("../../models/Event");

const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    await Event.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Event deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  deleteEvent,
};
