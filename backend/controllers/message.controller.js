const db = require('../models/index');

const Message = db.message;

exports.createMessage = (req, res) => {

    const message = new Message({
        room_id: req.body.roomId,
        user_id: req.body.userId,
        message: req.body.message
    })

    message.save((err, message) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }

        return res.status(200).send({ message: 'message created', res: message });
    })
}