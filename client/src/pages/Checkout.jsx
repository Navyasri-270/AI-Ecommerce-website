import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import API from '../services/api';
import { ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const shippingAddress = {
      street,
      city,
      state,
      zipCode,
      country
    };

    try {
      const res = await API.post('/orders/create', { shippingAddress });
      if (res.data.success) {
        setSuccess(true);
        clearCart();
        setTimeout(() => {
          navigate('/orders');
        }, 2000);
      }
    } catch (err) {
      console.error('Error placing order:', err);
      setError(err.response?.data?.message || 'Failed to place order. Please check item stock.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.items.length === 0 && !success) {
    return (
      <div className="max-w-md mx-auto my-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 font-extrabold">Checkout Unavailable</h2>
        <p className="text-slate-500 text-sm">Your cart is empty. Add products before checking out.</p>
        <Link to="/products" className="inline-block px-5 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl">
          View Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Success Modal Overlay */}
      {success && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-sm text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Order Placed!</h2>
            <p className="text-sm text-slate-500">Thank you for your purchase! Redirecting you to your order tracking portal...</p>
          </div>
        </div>
      )}

      {/* Header Link */}
      <div className="flex items-center space-x-2">
        <Link to="/cart" className="flex items-center space-x-1 text-sm text-slate-500 hover:text-primary-600 font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cart</span>
        </Link>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Checkout Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Address Form */}
        <form onSubmit={handleSubmitOrder} className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Shipping Address</h2>
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm font-semibold rounded-xl">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="123 Main St, Apt 4B"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="New York"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    State / Region
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="NY"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Zip Code / Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="10001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="United States"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Payment Method section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-slate-400" />
              <span>Payment Mode</span>
            </h2>
            <div className="flex items-center space-x-3 p-4 bg-primary-50/50 border border-primary-100 rounded-xl">
              <input type="radio" defaultChecked className="text-primary-600 focus:ring-primary-500" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Simulated Card Payment</p>
                <p className="text-xs text-slate-400">Order executes instant mock payment for testing.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {loading ? 'Processing Order...' : `Pay & Place Order ($${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })})`}
            </button>
          </div>
        </form>

        {/* Right Invoice recap panel */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm h-fit space-y-4">
          <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-3">Itemized Invoice</h3>
          <div className="space-y-3 max-h-[250px] overflow-y-auto">
            {cart.items.map((item) => (
              <div key={item._id} className="flex justify-between items-center text-xs">
                <div className="max-w-[70%]">
                  <p className="font-bold text-slate-700 truncate">{item.product.title}</p>
                  <p className="text-slate-400">Qty: {item.quantity}</p>
                </div>
                <span className="font-bold text-slate-800">
                  ${(item.product.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 pt-3 flex justify-between font-extrabold text-slate-800 text-sm">
            <span>Total Payable</span>
            <span>${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
