import mongoose, { Schema } from 'mongoose';

const paySchema = new Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    },
}, {
    versionKey: false
})

const Pay = mongoose.model('Pay', paySchema)

export default { Pay }