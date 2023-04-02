const { Notification } = require("../../models/Notification");

const getNotifications = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);
    const notifications = await Notification.find({
      studentId: studentId,
    }).sort({ date: -1 });

    console.log(notifications);

    return res.status(200).json({ notifications: notifications });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getNotifications,
};
