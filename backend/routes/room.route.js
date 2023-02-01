const roomController = require('../controllers/room.controller');
const { roomMiddleware } = require('../middlewares');

module.exports = {
    createRoom(app) { app.post('/api/room/createroom', [roomMiddleware.validateRoomWhileCreate], roomController.createRoom) }
}