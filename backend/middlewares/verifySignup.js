const db = require('../models/index');
const User = db.user;

checkDuplicateEmail = (req, res, next) => {

    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }

        if (user) {
            return res.status(200).send({ message: 'Email already in use' });
        }

        if (!req.body.name) {
            return res.status(200).send({ message: 'Name can not be empty' });
        }

        if(!req.body.password){
            return res.status(200).send({ message: 'Password can not be empty' });
        }
        next();
    })
}

const verifyEmail = {
    checkDuplicateEmail,
};

module.exports = verifyEmail;