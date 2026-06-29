const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderHistory,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/create', protect, createOrder);
router.get('/history', protect, getOrderHistory);
router.get('/', protect, admin, getAllOrders);
router.put('/:id/status', protect, admin, updateOrderStatus);

module.exports = router;
