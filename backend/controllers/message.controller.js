const { broadcastEvent } = require("../config/socket");
const db = require("../models/index");

const Message = db.message;

exports.createMessage = (req, res) => {
  const message = new Message({
    room_id: req.body.roomId,
    user_id: req.body.userId,
    message: req.body.message,
  });

  message.save((err, message) => {
    if (err) {
      return res.status(500).send({ sucess: false, message: err.message });
    }

    message.populate("user_id").then((populatedMessage, err) => {
      broadcastEvent("message_created", populatedMessage);

      return res.status(200).send({
        sucess: true,
        message: "message created",
        data: populatedMessage,
      });
    });
  });
};

exports.getMessages = (req, res) => {
  Message.find({ room_id: req.query.roomId })
    .populate("user_id")
    .exec((err, messages) => {
      if (err) {
        res.status(500).send({ sucess: false, message: err.message });
      }

      return res
        .status(200)
        .send({ sucess: true, message: "messages found", data: messages });
    });
};
