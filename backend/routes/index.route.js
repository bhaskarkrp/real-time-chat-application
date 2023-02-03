const authRoute = require('./auth.route');
const messageRoute = require('./message.route');
const roomRoute = require('./room.route');
const userRoute = require('./user.route');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    //auth routes
    authRoute.signup(app)
    authRoute.signin(app)
    authRoute.signout(app)

    //user routes
    userRoute.addRoom(app)
    
    //room routes
    roomRoute.createRoom(app)

    //message routes
    messageRoute.createMessage(app);
    messageRoute.getMessages(app);
}