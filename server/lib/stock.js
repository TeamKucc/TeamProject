import Product from '../models/product'

const stockChekc = (req,res,next)=>{

    Product.find({_id:req.body.Product})
}