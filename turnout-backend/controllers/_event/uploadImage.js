const path = require("path");
const { Event } = require("../../models/Event");

const uploadImage = async (req, res) => {
    try {
        const id = req.params.id;
        const image = req.files.files;
        if (!image) {
            return
        }

        if ((image.mimetype !== "image/png")) {
            return res.status(400).json({ message: "Invalid image" });
        }
        const randomNumber = Math.floor(Math.random() * (999999 - 111111) + 111111);
        const fileName = `${randomNumber}${image.name}`;
        image.mv(`${path.resolve(__dirname, "../../", "uploads/event_files/")}/${fileName}`)

        const event = await Event.findById(id);
        const newEvent = {
            ...event,
            _doc: {
                ...event._doc,
                poster: fileName
            }
        }

        await Event.findByIdAndUpdate(id, { $set: newEvent });
        return res.status(200).json({ message: "Image for event uploaded successfully." })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    
}

module.exports = {
    uploadImage
}