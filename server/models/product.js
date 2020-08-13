import mongoose, { Schema } from 'mongoose';


const productSchema = new Schema({

  seller: {
    type:mongoose.Types.ObjectId,
    required: true,
  },

  stock: {
    type: Number,
    default:0,
  },
  
  thumbnails: {
    type: Array,
    default: [],
  },

  title: {
    type: String,
    maxlength: 20,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    default: 0,
  },

  images: {
    type: Array,
    default: [],
  },

  discount: {
    type: Number,
    default: 0,
  },

  person: {
    type: Number,
    default: 0,
  },

  enable: {
    type: Boolean,
    default: null
  },

  created:{
    type:Date,
    default:Date.now
  },

  category:{
    type:String,
    default: null
  }
},{
  versionkey:false,
});

productSchema.index(
  {
    title: 'text',
    description: 'text',
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  },
);

const Product = mongoose.model('Product', productSchema);
export default Product;