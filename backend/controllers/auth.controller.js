const config = require("../config/auth.config");
const db = require("../models/index");

const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 8),
    avatar: req.body.avatar,
  });

  user.save((err, user) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }

    return res.status(200).send({
      success: true,
      message: "Your account has been registered.",
      user,
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }

    if (!user) {
      return res
        .status(200)
        .send({ success: false, message: "User not found!" });
    }

    var isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordValid) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid Password!" });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400,
    });

    req.session.token = token;

    // return whole metadata
    res.status(200).send({
      success: true,
      message: "User Logged in",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
    });
  });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res
      .status(200)
      .send({ success: true, message: "Signed out successfully!" });
  } catch (error) {
    this.next(err);
  }
};
