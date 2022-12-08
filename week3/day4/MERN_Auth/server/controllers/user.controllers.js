const User = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt.config.js");


module.exports = {

    register: (req, res) => {
        User.create(req.body)
            .then(user => res.cookie("userToken", jwt.sign({ id: user._id }, secret), { httpOnly: true }).json({ msg: "success", user: user }))
            .catch(err => res.status(400).json(err.errors));
    },
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}