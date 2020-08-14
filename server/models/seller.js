import mongoose, { Schema } from 'mongoose';

const sellerSchema = new Schema({
    product: { type: mongoose.Types.ObjectId, required: true },
    payment: { type: mongoose.Types.ObjectId, required: true },
    info: { type: String, required: true }
})

const Seller = mongoose.model('sellerSchema', sellerSchema);

export default Seller;
