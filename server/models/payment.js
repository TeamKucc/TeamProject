import mongoose, { Schema } from 'mongoose';

const paySchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    seller: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    delivery: { type: String },
    deliveryNumber: { type: String },
    productInfo: {
      type: Object,
      required: true
    },
    payInfo: {
      type:Object,
      required: true
    }
  },
  {
    versionKey: false,
  },
);

const Pay = mongoose.model('Pay', paySchema);

export default Pay;
