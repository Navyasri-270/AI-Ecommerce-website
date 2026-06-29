import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { LayoutDashboard, Plus, Trash2, Edit2, Package, ShoppingBag, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('products'); // 'products' or 'orders'

  useEffect(() => {
    fetchDashboardData();
  }, [viewMode]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      if (viewMode === 'products') {
        const prodRes = await API.get('/products');
        if (prodRes.data.success) {
          setProducts(prodRes.data.data);
        }
      } else {
        const orderRes = await API.get('/orders');
        if (orderRes.data.success) {
          setOrders(orderRes.data.data);
        }
      }
    } catch (err) {
      console.error('Error fetching admin details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete product: "${title}"?`)) return;
    try {
      const res = await API.delete(`/products/${id}`);
      if (res.data.success) {
        setProducts(products.filter(p => p._id !== id));
        alert('Product deleted successfully');
      }
    } catch (err) {
      console.error('Error deleting product:', err);
      alert(err.response?.data?.message || 'Failed to delete product');
    }
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await API.put(`/orders/${orderId}/status`, { status: newStatus });
      if (res.data.success) {
        setOrders(orders.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
        alert('Order status updated');
      }
    } catch (err) {
      console.error('Error updating order:', err);
      alert(err.response?.data?.message || 'Failed to update order');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Dashboard title row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="flex items-center space-x-3">
          <LayoutDashboard className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-xs text-slate-400 font-medium">Manage catalog inventory and check customer dispatch orders</p>
          </div>
        </div>

        {/* View mode toggle controls */}
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('products')}
            className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center space-x-2 transition-all ${
              viewMode === 'products' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Products Catalog</span>
          </button>
          <button
            onClick={() => setViewMode('orders')}
            className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center space-x-2 transition-all ${
              viewMode === 'orders' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Customer Orders</span>
          </button>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : viewMode === 'products' ? (
        
        // ==================== PRODUCTS LIST VIEW ====================
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-800">
              Total Products ({products.length})
            </h2>
            <Link
              to="/admin/add-product"
              className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </Link>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="px-6 py-4">Product Info</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Brand</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {products.map(p => (
                  <tr key={p._id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 overflow-hidden flex-shrink-0 border border-slate-100">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-slate-800 line-clamp-1 max-w-[200px]">{p.title}</span>
                    </td>
                    <td className="px-6 py-4">{p.category}</td>
                    <td className="px-6 py-4 text-slate-500">{p.brand}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">${p.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        p.stock === 0 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {p.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Link
                          to={`/admin/edit-product/${p._id}`}
                          className="p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-lg transition-all"
                          title="Edit Details"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteProduct(p._id, p.title)}
                          className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-all"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        
        // ==================== ORDERS LIST VIEW ====================
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-800">
            Total Orders ({orders.length})
          </h2>

          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="px-6 py-4">Order ID & Date</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Items Count</th>
                  <th className="px-6 py-4">Total Price</th>
                  <th className="px-6 py-4">Delivery Status</th>
                  <th className="px-6 py-4 text-center">Modify Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {orders.map(o => (
                  <tr key={o._id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-800 truncate max-w-[120px]">{o._id}</p>
                      <p className="text-[10px] text-slate-400">{new Date(o.createdAt).toLocaleDateString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-800">{o.user?.name || 'Guest user'}</p>
                      <p className="text-[10px] text-slate-400">{o.user?.email || '-'}</p>
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {o.items?.length || 0} unique item(s)
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-800">
                      ${o.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        o.status === 'Delivered'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                          : o.status === 'Shipped'
                          ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                          : 'bg-amber-50 text-amber-600 border border-amber-100'
                      }`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <select
                        value={o.status}
                        onChange={(e) => handleUpdateOrderStatus(o._id, e.target.value)}
                        className="bg-slate-50 px-2 py-1 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
