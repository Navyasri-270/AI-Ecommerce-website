import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import API from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowLeft, Save } from 'lucide-react';

const CATEGORIES = [
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
];

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        if (res.data.success) {
          const p = res.data.data;
          setTitle(p.title);
          setDescription(p.description);
          setPrice(p.price);
          setCategory(p.category);
          setImage(p.image);
          setStock(p.stock);
          setBrand(p.brand);
        }
      } catch (err) {
        console.error('Error fetching product details for editing:', err);
        setError('Failed to retrieve product details');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      title,
      description,
      price: Number(price),
      category,
      image,
      stock: Number(stock),
      brand
    };

    try {
      const res = await API.put(`/products/${id}`, payload);
      if (res.data.success) {
        alert('Product details updated!');
        navigate('/admin');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to update product details');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <LoadingSpinner fullPage />;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      
      {/* Back link */}
      <div className="flex items-center space-x-2">
        <Link to="/admin" className="flex items-center space-x-1 text-sm text-slate-500 hover:text-primary-600 font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Edit Product Specifications</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        
        {error && (
          <div className="p-4 bg-red-50 text-red-700 text-sm font-semibold rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Title */}
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Product Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Brand Name
            </label>
            <input
              type="text"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Stock Count
            </label>
            <input
              type="number"
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            />
          </div>

          {/* Image URL */}
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Image URL
            </label>
            <input
              type="url"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Product Description
            </label>
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all resize-none"
            />
          </div>

        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{submitting ? 'Saving Changes...' : 'Save Product Spec Changes'}</span>
        </button>

      </form>
    </div>
  );
};

export default EditProduct;
