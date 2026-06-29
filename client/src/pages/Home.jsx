import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Sparkles, ArrowRight, Laptop, Shirt, Smartphone, Zap, Flame, Award } from 'lucide-react';

const CATEGORIES = [
  { name: 'Mobile Phones', icon: Smartphone, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Laptops', icon: Laptop, color: 'bg-blue-50 text-blue-600' },
  { name: 'Electronics', icon: Zap, color: 'bg-amber-50 text-amber-600' },
  { name: 'Fashion', icon: Shirt, color: 'bg-purple-50 text-purple-600' },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await API.get('/products');
        if (res.data.success) {
          setProducts(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching home catalog:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  // Filter recommendations based on high rating (4.7+)
  const recommendations = products.filter(p => p.rating >= 4.7).slice(0, 4);
  const hotDeals = products.slice(0, 8);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Grand Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mt-6 mx-4 sm:mx-6 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e1b4b,#0f172a)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:px-12 sm:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 text-left max-w-2xl">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Generation E-Commerce</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Shop Smarter with AI Semantic Search
            </h1>
            <p className="text-lg text-slate-300 max-w-lg font-light leading-relaxed">
              Don't guess exact keywords. Search naturally. Try typing <span className="font-semibold text-primary-400">"comfortable running trainers"</span> or <span className="font-semibold text-primary-400">"best laptop for coding"</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Decorative AI visual element */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 bg-gradient-to-tr from-primary-600 to-indigo-600 rounded-3xl shadow-xl flex items-center justify-center p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm"></div>
            <div className="relative text-center space-y-4">
              <Sparkles className="w-16 h-16 text-white mx-auto animate-pulse" />
              <p className="font-bold text-lg tracking-tight">AI Matching Enabled</p>
              <p className="text-xs text-slate-200">Vector Embeddings generated via Google Gemini Studio API</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="flex items-center space-x-4 p-4 bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-2xl shadow-sm hover:shadow transition-all group"
              >
                <div className={`p-3.5 rounded-xl ${cat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{cat.name}</h3>
                  <p className="text-xs text-slate-400">View products</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* AI Smart Recommendations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">AI Smart Recommendations</h2>
          </div>
          <span className="text-xs font-semibold text-slate-400">Based on high customer reviews</span>
        </div>
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendations.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Hot Deals & New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-orange-600 animate-bounce" />
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">New Arrivals & Hot Deals</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {hotDeals.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Home;
