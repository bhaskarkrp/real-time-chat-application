const messageController = require('../controllers/message.controller');

module.exports = {
    createMessage(app) { app.post("/api/message", messageController.createMessage) }
}