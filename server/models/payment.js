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
    seller:{
      type:mongoose.Types.ObjectId,
      required:true
    }
    ,
    delivery: { type: String },
    deliveryNumber: { type: Number },
  },
  {
    versionKey: false,
  },
);

const Pay = mongoose.model('Pay', paySchema);

export default Pay;
