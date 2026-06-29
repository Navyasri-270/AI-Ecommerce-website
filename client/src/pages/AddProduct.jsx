import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../services/api';
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

const AddProduct = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      const res = await API.post('/products', payload);
      if (res.data.success) {
        alert('Product added successfully!');
        navigate('/admin');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      
      {/* Back button */}
      <div className="flex items-center space-x-2">
        <Link to="/admin" className="flex items-center space-x-1 text-sm text-slate-500 hover:text-primary-600 font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Add New Product</h1>

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
              placeholder="e.g. UltraSound Noise Canceling Earbuds"
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
              placeholder="e.g. Sony"
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
              placeholder="299.99"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Initial Stock Count
            </label>
            <input
              type="number"
              required
              placeholder="50"
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
              placeholder="https://images.unsplash.com/photo-..."
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
              placeholder="Provide a detailed overview of the product. This text will be analyzed to generate AI vector embeddings."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl outline-none text-sm transition-all resize-none"
            />
          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{loading ? 'Creating Product...' : 'Add Product to Catalog'}</span>
        </button>

      </form>
    </div>
  );
};

export default AddProduct;
