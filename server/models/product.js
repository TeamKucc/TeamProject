const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = { Product };
