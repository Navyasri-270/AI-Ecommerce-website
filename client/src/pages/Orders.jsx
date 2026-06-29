import React, { useState, useEffect } from 'react';
import API from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { ShoppingBag, Calendar, MapPin, ClipboardList, CheckCircle } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get('/orders/history');
        if (res.data.success) {
          setOrders(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching order history:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Processing': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Shipped': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case 'Delivered': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  const getStatusStep = (status) => {
    switch (status) {
      case 'Pending': return 1;
      case 'Processing': return 2;
      case 'Shipped': return 3;
      case 'Delivered': return 4;
      default: return 1;
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center space-x-3">
        <ClipboardList className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Order History</h1>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center shadow-sm">
          <span className="text-5xl">📦</span>
          <h2 className="mt-4 text-xl font-extrabold text-slate-800">No orders placed yet</h2>
          <p className="mt-2 text-slate-500 max-w-sm mx-auto">
            Once you make a purchase, your orders and real-time delivery status will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const currentStep = getStatusStep(order.status);
            return (
              <div
                key={order._id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden animate-in fade-in-50 duration-200"
              >
                
                {/* Header overview banner */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-6 text-xs text-slate-500">
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-[10px]">Order Date</p>
                      <div className="flex items-center space-x-1 mt-0.5 font-bold text-slate-700">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-[10px]">Total Amount</p>
                      <p className="mt-0.5 font-extrabold text-slate-800 text-sm">
                        ${order.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                {/* Progress bar timeline */}
                <div className="px-6 py-8 border-b border-slate-100 bg-white">
                  <div className="relative flex items-center justify-between max-w-xl mx-auto">
                    {/* Connecting line */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-slate-100 -z-10"></div>
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary-600 -z-10 transition-all duration-500"
                      style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                    ></div>

                    {/* Steps */}
                    {['Placed', 'Processing', 'Shipped', 'Delivered'].map((step, idx) => {
                      const stepNum = idx + 1;
                      const active = stepNum <= currentStep;
                      return (
                        <div key={step} className="flex flex-col items-center space-y-2 bg-white px-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all border ${
                            active
                              ? 'bg-primary-600 border-primary-600 text-white shadow-sm'
                              : 'bg-white border-slate-200 text-slate-400'
                          }`}>
                            {stepNum < currentStep || currentStep === 4 ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <span>{stepNum}</span>
                            )}
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${
                            active ? 'text-primary-600' : 'text-slate-400'
                          }`}>
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Items list body */}
                <div className="p-6 space-y-4">
                  {order.items.map((item) => (
                    <div key={item._id} className="flex items-center justify-between text-sm gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 line-clamp-1">{item.title}</p>
                          <p className="text-xs text-slate-400">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-extrabold text-slate-800">${item.price.toLocaleString()}</span>
                    </div>
                  ))}

                  {/* Shipping info footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl">
                    <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-700">Delivery Address</p>
                      <p className="mt-1">
                        {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}, {order.shippingAddress.country}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Orders;
