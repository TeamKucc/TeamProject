import mongoose, { Schema } from 'mongoose';

const DeliverySchema = new Schema(
  {
    delivery: { type: String },
    deliveryNumber: { type: Number },
  },
);

const Delivery = mongoose.model('Delivery', DeliverySchema);
export default Delivery;
