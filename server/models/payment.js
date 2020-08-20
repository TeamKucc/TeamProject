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
    delivery: { type: String ,default: "not yet"},
    deliveryNumber: { type: String, default: "not yet" },
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
