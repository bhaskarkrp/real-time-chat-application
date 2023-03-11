const db = require("../models");
var bcrypt = require("bcryptjs");

const Room = db.room;
const User = db.user;

exports.createRoom = (req, res) => {
  const room = new Room({
    room_name: req.body.room_name,
    password: bcrypt.hashSync(req.body.password, 8),
    admin: req.body.admin,
  });

  room.save((err, room) => {
    if (err) {
      return res.status(500).send({ sucess: false, message: err.message });
    }

    User.findByIdAndUpdate(room.admin, { $push: { room: room._id } }).exec(
      (err, user) => {
        if (err)
          return res.status(500).send({ sucess: false, message: err.message });

        res.status(200).send({
          sucess: true,
          message: "Room has been successfully created!",
        });
      }
    );
  });
};

exports.getRooms = (req, res) => {
  console.log(req.query);
  User.findOne({ _id: req.query.userId })
    .populate("room")
    .exec((err, user) => {
      if (err)
        return res.status(500).send({ sucess: false, message: err.message });
      // console.log(err, user);

      return res.status(200).send({
        sucess: true,
        message: "Room has been successfully fetched!",
        data: user,
      });
    });
};
