import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const DealSchema = new Schema({
    user: { type: Array, required: true },
    product:{type:mongoose.Types.ObjectId,required:true},
    complete: { type: Boolean,default:false },
    join:{type:Number},
    // time:{type:Number,default:}
},{
    versionKey:false
})

const Deal = mongoose.model('Deal', DealSchema)
export default Deal