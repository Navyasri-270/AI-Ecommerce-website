const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Helper to get or create cart
const getOrCreateCart = async (userId) => {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }
  return cart;
};

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
exports.getCart = async (req, res) => {
  try {
    const cart = await getOrCreateCart(req.user.id);
    await cart.populate('items.product');
    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add item to cart or increment quantity
// @route   POST /api/cart/add
// @access  Private
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    // Verify product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const cart = await getOrCreateCart(req.user.id);

    // Check if item already exists in cart
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
      // Increment quantity
      cart.items[itemIndex].quantity += Number(quantity);
    } else {
      // Add new item
      cart.items.push({ product: productId, quantity: Number(quantity) });
    }

    await cart.save();
    await cart.populate('items.product');

    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Remove item from cart or decrement quantity
// @route   DELETE /api/cart/remove
// @access  Private
exports.removeFromCart = async (req, res) => {
  try {
    const { productId, decrement = false } = req.query;

    const cart = await getOrCreateCart(req.user.id);

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }

    if (decrement && cart.items[itemIndex].quantity > 1) {
      // Decrement quantity
      cart.items[itemIndex].quantity -= 1;
    } else {
      // Remove completely
      cart.items.splice(itemIndex, 1);
    }

    await cart.save();
    await cart.populate('items.product');

    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
