import User from '../../models/user';
import Pay from '../../models/payment'
import Product from '../../models/product';
import Deal from '../../models/deal'

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
    // console.log(_id)
    User.findOne({ _id: _id }, (err, result) => {
        if (err) res.status(404).json({
            message: err
        });
        res.json(result)
    })
}

export const userUpdate = async (req, res) => {

    const { userID, name, password, email } = req.body

    User.findOneAndUpdate({ _id: req.body._id }, { userID: userID, name: name, password: password, email: email }, (err, result) => {
        if (err) return res.status(404).json({
            message: 'Changed error',
            Change: false
        })
        res.json({
            message: 'Success User Infomation Change',
            Change: true,
            result: result
        })
    })
}

export const gethistory = (req, res) => {
    Pay.findOne({ user: req.body.user }, (err, result) => {
        if (err) return res.status(500).json({
            message: err,
            success: false
        })
        console.log(result)
        Product.findOne({ _id: result.product }, (err, res2) => {
            if (err) return res.status(500).json({
                message: 'product not found',
                success: false
            })
            res.json(
                { result, res2 },
            );
        })
    })
}

export const makeDeal = (req, res) => {
    const deal = new Deal(req.body)
    deal.save((err, result) => {
        if (err) res.status(400).json({
            success: false,
            message: err
        })
        res.json(result)
    })
}

export const joinDeal =(req,res)=>{
    console.log(req.body._id)
    Deal.findOneAndUpdate({_id:req.body._id},{$push:{user:req.body.user}},(err,result)=>{
        if(err) res.status(400).json({
            success:false,
            message:err
        })
        res.status(200).json(result)
    })
}

