const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    room_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Room', roomSchema)