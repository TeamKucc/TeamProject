const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
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
=======
const productSchema = mongoose.Schema(
  {
    images: {
      type: Array,
      default: [],
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

    discount: {
      type: Number,
      default: 0,
    },

    person: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739

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

<<<<<<< HEAD
export default Product;
=======
module.exports = { Product };
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739
