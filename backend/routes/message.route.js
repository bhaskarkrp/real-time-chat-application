const messageController = require('../controllers/message.controller');

module.exports = {
    createMessage(app) { app.post("/api/message", messageController.createMessage) },

    getMessages(app) { app.get("/api/messages", messageController.getMessages) }
}