import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, addToCart, cartTotal, loading } = useCart();

  const handleIncrement = (productId, stock) => {
    const item = cart.items.find(i => i.product._id === productId);
    if (item && item.quantity < stock) {
      addToCart(productId, 1);
    } else {
      alert('Cannot add more than available stock.');
    }
  };

  const handleDecrement = (productId) => {
    removeFromCart(productId, true); // true = decrement
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId, false); // false = remove completely
  };

  if (cart.items.length === 0) {
    return (
      <div className="max-w-md mx-auto my-16 px-4 text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center">
          <ShoppingCart className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Your Cart is Empty</h2>
        <p className="text-sm text-slate-500">
          Looks like you haven't added anything to your cart yet. Let's start shopping!
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow transition-colors"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart items list */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => {
            const prod = item.product;
            if (!prod) return null;
            return (
              <div
                key={item._id}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in-50 duration-200"
              >
                
                {/* Image & Title */}
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                    <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Link to={`/products/${prod._id}`} className="font-bold text-slate-800 hover:text-primary-600 text-sm line-clamp-1 transition-colors">
                      {prod.title}
                    </Link>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{prod.brand} | {prod.category}</p>
                    <p className="text-xs font-bold text-slate-700 mt-1 sm:hidden">
                      ${prod.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Adjust quantities */}
                <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-start">
                  
                  {/* Plus Minus control buttons */}
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                    <button
                      onClick={() => handleDecrement(prod._id)}
                      className="px-2.5 py-1 text-slate-500 hover:bg-slate-100 font-bold transition-all"
                    >
                      -
                    </button>
                    <span className="px-3.5 py-1 text-xs font-bold text-slate-800 text-center min-w-[28px]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(prod._id, prod.stock)}
                      className="px-2.5 py-1 text-slate-500 hover:bg-slate-100 font-bold transition-all"
                    >
                      +
                    </button>
                  </div>

                  {/* Pricing Details */}
                  <div className="hidden sm:block text-right min-w-[80px]">
                    <span className="text-sm font-bold text-slate-800">
                      ${(prod.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                    <p className="text-[10px] text-slate-400 font-semibold">${prod.price.toLocaleString()} each</p>
                  </div>

                  {/* Remove bin button */}
                  <button
                    onClick={() => handleRemoveItem(prod._id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

        {/* Order billing Summary Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm h-fit space-y-6">
          <h2 className="font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4 text-slate-500" />
            <span>Order Summary</span>
          </h2>
          
          <div className="space-y-3 text-sm text-slate-500">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-slate-800">${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span className="text-emerald-600 font-bold">FREE</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (calculated at checkout)</span>
              <span>$0.00</span>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between font-extrabold text-slate-900 text-base">
              <span>Total Amount</span>
              <span>${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/checkout"
              className="w-full py-3 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="text-center text-xs">
            <Link to="/products" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
