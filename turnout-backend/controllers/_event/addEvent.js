const { Event } = require("../../models/Event");

const addEvent = async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      date: new Date(req.body.date).toString(),
    });

    console.log(event);
    const newEvent = await event.save(event);

    if (event === newEvent) {
      return res.status(201).json({
        event: newEvent,
      });
    } else {
      throw Error("Cannot create admin");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addEvent,
};
