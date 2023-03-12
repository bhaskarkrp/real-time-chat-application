const db = require("../../models");
const Room = db.room;

var bcrypt = require("bcryptjs");

validateRoomWhileCreate = (req, res, next) => {
  Room.findOne({
    room_name: req.body.room_name,
  }).exec((err, room) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    if (room) {
      return res
        .status(400)
        .send({
          message: "Room name is already taken, please use some other name.",
        });
    }

    next();
  });
};

validateRoomWhileAdd = (req, res, next) => {
  Room.findOne({ room_name: req.body.roomName }).exec((err, room) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    if (!room) {
      return res.status(200).send({ message: "Room does not found" });
    }

    // validate password
    let isPasswordValid = bcrypt.compareSync(req.body.password, room.password);

    if (!isPasswordValid) {
      return res.status(200).send({ message: "Invalid Password!" });
    }

    req.roomId = room.id;
    next();
  });
};

const roomMiddleware = {
  validateRoomWhileCreate,
  validateRoomWhileAdd,
};

module.exports = roomMiddleware;
