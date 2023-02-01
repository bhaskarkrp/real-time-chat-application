const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    room_id: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Message', MessageSchema)