const { broadcastEvent } = require("../config/socket");
const db = require("../models");

const User = db.user;
const Room = db.room;

exports.addRoomToUser = (req, res) => {
  //api - body: {userId, roomName, password}
  User.findById(req.body.userId)
    .populate("room")
    .exec((err, user) => {
      if (err) {
        return res.status(500).send({ sucess: false, message: err.message });
      }

      if (!user) {
        return res
          .status(200)
          .send({ sucess: false, message: "User not found" });
      }
      const room = user.room.filter(
        (room) => room.room_name == req.body.roomName
      );
      if (room.length == 0) {
        User.updateOne(
          { _id: req.body.userId },
          { $push: { room: req.roomId } }
        ).exec((err, updatedUser) => {
          if (err) {
            return res
              .status(500)
              .send({ sucess: false, message: err.message });
          }

          if (!updatedUser.modifiedCount) {
            return res
              .status(500)
              .send({ sucess: false, message: "Could not add room" });
          }

          const addedRoom = Room.findById(req.roomId)
            .exec((err, room) => {
              broadcastEvent('room_added', room);
            })

          return res.status(200).send({
            sucess: true,
            message: "Room added successfully!",
            updatedUser,
          });
        });
      } else {
        return res.status(200).send({
          sucess: true,
          message: "Already a part of this room!",
          room: room,
        });
      }
    });
};
