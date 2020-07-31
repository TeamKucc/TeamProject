import User from '../../models/user';
import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const ObjectId = mongoose.Types.ObjectId;

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
    console.log(_id)
    User.findOne({ _id: _id }, (err, result) => {
        if (err) res.status(404).json({
            message: err
        });
        res.json(result)
    })
}

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
            message: 'Success User Infomation Change',
            Change: true
        })
    })
}

// export const assignAdmin = (req, res) => {
//   if (!req.decode.admin) {
//     return res.status(403).json({
//       message: 'you are not adimn',
//     });
//   }

//   User.findByUsername(req.params.username)
//     .then((user) => user.assignAdmin())
//     .then(
//       res.json({
//         success: true,
//       }),
//     );
// };

