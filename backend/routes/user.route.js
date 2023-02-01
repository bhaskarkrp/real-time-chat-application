const { roomMiddleware } = require('../middlewares');
const roomController = require('../controllers/user.controller');

module.exports = {
    addRoom(app) { app.patch('/api/user/addroom', [roomMiddleware.validateRoomWhileAdd], roomController.addRoomToUser) }
}