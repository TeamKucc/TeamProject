import mongoose, { Schema } from 'mongoose';

const paySchema = new Schema({
    user: {
        type:mongoose.Types.ObjectId,
        required: true,
    },
    product: {
        type:mongoose.Types.ObjectId,
        required: true,
    },
    postNumber: {
        type: String,
        default:'not yet'
    },
}, {
    versionKey: false
})

const Pay = mongoose.model('Pay', paySchema)

export default Pay 