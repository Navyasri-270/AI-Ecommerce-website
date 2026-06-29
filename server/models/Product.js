const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a product title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a product description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a product price'],
    min: [0, 'Price must be positive']
  },
  category: {
    type: String,
    required: [true, 'Please add a product category'],
    enum: [
      'Mobile Phones',
      'Laptops',
      'Electronics',
      'Fashion',
      'Footwear',
      'Books',
      'Furniture',
      'Grocery',
      'Beauty',
      'Sports'
    ]
  },
  image: {
    type: String,
    required: [true, 'Please add a product image URL']
  },
  stock: {
    type: Number,
    required: [true, 'Please add stock count'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  rating: {
    type: Number,
    default: 4.0,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot be more than 5']
  },
  brand: {
    type: String,
    required: [true, 'Please add a brand name']
  },
  embedding: {
    type: [Number],
    default: []
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
