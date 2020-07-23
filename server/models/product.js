const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
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
  created:{
    type:Date,
    default:Date.now
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
