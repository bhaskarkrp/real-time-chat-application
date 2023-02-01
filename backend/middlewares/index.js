const verifyToken = require('./verifyToken');
const verifySignup = require('./verifySignup');
const roomMiddleware = require('./room/validateRoom');

module.exports = {
    verifyToken,
    verifySignup,
    roomMiddleware
};