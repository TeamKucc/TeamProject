require('dotenv').config()
import User from '../../models/user'
import jwt, { decode } from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const auth = (req, res) => {

}

export const register = async (req, res) => {
    const user = new User(req.body);
    const {userID} = user

    await User.findOne({ userID: userID }, (err, userID) => {
        if (userID) {
            res.status(409).json({
                message: "ID already exist"
            })
        } else {
            user.save((err, doc) => {
                if (err) return res.json({ success: false, err });
                return res.status(200).json({
                    success: true
                })
            })
        }
    })

}


export const login = (req, res) => {
    console.log(req.body)
    User.findOne({ userID: req.body.userID }, (err, user) => {
        if (!user) return res.json({
            loginSuccess: false,
            message: "Login Failed,ID not Found"
        });
        user.verify(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({ login: false, maessage: "wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res.cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        login: true, userId: user._id
                    })
            })
        })
    })
}

export const logout = (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).send({
            logoutsuccess: true
        })
    })
}
