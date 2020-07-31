import mongoose, { Schema } from 'mongoose';

const paySchema = new Schema({
    user: {
        type:String,
        required: true,
    },
    product: {
        type: String,
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