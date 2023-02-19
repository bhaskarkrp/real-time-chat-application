const db = require('../../models');
const User = db.user;


validateMessageWhileSave = (req, res, next) => {

    // check if user is part of the room
    User.findOne({
        _id: req.body.userId
    }).exec((err, user) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }

        if (user) {
            const isFound = user.room.includes(req.body.roomId);

            if (!isFound) {
                return res.status(400).send({
                    message: 'User is not the part of the room'
                })
            }

            next();
        } else {
            return res.status(400).send({
                message: 'User not found, please use valid user'
            })
        }
    })
};

const messageMiddleware = {
    validateMessageWhileSave
}

module.exports = messageMiddleware;