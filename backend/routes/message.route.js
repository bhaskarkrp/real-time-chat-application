const messageController = require('../controllers/message.controller');
const { messageMiddleware } = require('../middlewares')

module.exports = {
    createMessage(app) { app.post("/api/message", [messageMiddleware.validateMessageWhileSave], messageController.createMessage) },

    getMessages(app) { app.get("/api/messages", messageController.getMessages) }
}