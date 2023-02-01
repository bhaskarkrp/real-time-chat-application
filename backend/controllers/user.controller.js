const db = require('../models');

const User = db.user;

exports.addRoomToUser = (req, res) => {

    User.findById(req.body.userId)
        .exec((err, user) => {
            if (err) {
                return res.status(500).send({ message: err.message });
            }

            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }

            User.find({ room: req.roomId })
                .exec((err, isPresent) => {
                    if (err) {
                        return res.status(500).send({ message: err.message });
                    }

                    if (isPresent) {
                        return res.status(401).send({ message: 'Already a part of this room!', room: isPresent });
                    }

                    User.updateOne({ _id: req.body.userId }, { $push: { room: req.roomId } })
                        .exec((err, updatedUser) => {
                            if (err) {
                                return res.status(500).send({ message: err.message });
                            }

                            if (!updatedUser.modifiedCount) {
                                return res.status(401).send({ message: 'Could not add room' })
                            }

                            return res.status(200).send({ message: 'Room added successfully!', updatedUser });
                        })
                })
        })
}