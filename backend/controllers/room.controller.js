const db = require('../models');
var bcrypt = require('bcryptjs');

const Room = db.room;

exports.createRoom = (req, res) => {

    const room = new Room({
        room_name: req.body.room_name,
        password: bcrypt.hashSync(req.body.password, 8),
        admin: req.body.admin
    })

    room.save((err, room) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }

        res.send({ message: 'Room has been successfully created!' });
    })
};