import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const DealSchema = new Schema({
    user: { type: Array, required: true },
    userName:{type:String,required:true},
    product:{type:mongoose.Types.ObjectId,required:true},
    complete: { type: Boolean,default:false },
    join:{type:Number},
    enable:{type:Boolean,default:true},
    created:{type:Date,default:Date.now}
},{
    versionKey:false
})

const Deal = mongoose.model('Deal', DealSchema)
export default Deal