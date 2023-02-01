const { verifySignup } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = {
    signup(app) {
        app.post(
            "/api/auth/signup",
            [
                verifySignup.checkDuplicateEmail,
            ],
            controller.signup
        )
    },

    signin(app) { app.post("/api/auth/signin", controller.signin) },

    signout(app) { app.post("/api/auth/signout", controller.signout) }
}