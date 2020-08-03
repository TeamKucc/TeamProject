import User from '../../models/user';
<<<<<<< HEAD
import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const ObjectId = mongoose.Types.ObjectId;
=======
import Pay from '../../models/payment'
>>>>>>> 김선규

export const list = (req, res) => {
    if (!req.decode.admin) {
        return res.status(403).json({
            message: 'you are not adimn'
        })
    }
    User.find({})
        .then(
            users => {
                res.json({ users })
            }
        )
}

export const userInfo = (req, res) => {
    const { _id } = req.params
<<<<<<< HEAD
    console.log(_id)
=======
    // console.log(_id)
>>>>>>> 김선규
    User.findOne({ _id: _id }, (err, result) => {
        if (err) res.status(404).json({
            message: err
        });
        res.json(result)
    })
}

<<<<<<< HEAD
export const userUpdate = async (req, res) => {
    console.log(req.body)
    const { userID, name, password, email,_id } = req.body
 
    User.findOneAndUpdate({ _id:_id }, { userID: userID, name: name, password: password, email: email }, (err, result) => {
        if (err) return res.status(500).json({
            message: 'Changed error',
            err:err,
            Change: false
        });
        res.json({
            result: result,
=======
export const userUpdate = (req, res) => {
    console.log(req.body)
    const { userID, name, password, email } = req.body
    User.findOneAndUpdate({ _id: req.body._id }, { userID, name, password, email }, (err, result) => {
        if (err) return res.status(404).json({
            message: 'Changed error',
            Change: false
        })
        res.json({
>>>>>>> 김선규
            message: 'Success User Infomation Change',
            Change: true
        })
    })
}

export const gethistory = (req, res) => {

    Pay.findOne({ user: req.body.user }, (err, result) => {
        if (err) return res.status(500).json({
            message: err,
            success: false
        })
        res.status(200).json(result)

    })
}

