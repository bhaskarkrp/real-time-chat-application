const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.message = require('./message.model');
db.room = require('./room.model');

// db.ROLES = ['user', 'admin']

module.exports = db;