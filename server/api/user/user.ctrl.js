import User from '../../models/user'

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
    
    const {_id} = req.params
    console.log(_id)
    User.findOne({_id:_id},(err,result)=>{
        if(err) res.status(404).json({
            message:err
        });
        res.json(result)
    })
}

export const userUpdate = (req,res)=>{
    const {userID,name,password,eamil} = req.body
    User.findOneAndUpdate({_id:req.body._id},{userID,name,password,email},(err,result)=>{
        if(err) return res.status(404).json({
            message:'Changed error',
            Change:false
        })
        res.json({
            message:'Success User Infomation Change',
            Change:true
        })
    })
}