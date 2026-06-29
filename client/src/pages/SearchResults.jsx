import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) {
      setQueryText(q);
      executeSemanticSearch(q);
    }
  }, [location.search]);

  const executeSemanticSearch = async (qText) => {
    setLoading(true);
    try {
      const res = await API.post('/ai/search', { query: qText });
      if (res.data.success) {
        setResults(res.data.data);
      }
    } catch (err) {
      console.error('Semantic Search Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Search Header Banner */}
      <div className="bg-gradient-to-r from-primary-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        <div className="space-y-2 relative z-10">
          <div className="flex items-center space-x-1.5 text-primary-300 font-semibold text-xs">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span>AI Semantic Vector Search Results</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Results for: <span className="text-primary-300">"{queryText}"</span>
          </h1>
          <p className="text-xs text-slate-300 max-w-md">
            Our system evaluated product descriptions, titles, brands, and categories to match the contextual meaning of your query.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs font-medium bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto">
          <span>AI Search Enabled</span>
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : results.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="mx-auto w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">No Semantic Matches Found</h2>
          <p className="text-sm text-slate-500">
            We couldn't match your query with products in our database. Try general terms like "sports", "laptop", or describe what you want in simple words.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow"
            >
              Browse General Catalog
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center space-x-1"
            >
              <span>Back Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-800">
              Matched Items ({results.length})
            </h2>
            <span className="text-xs text-slate-400 font-medium">Sorted by match accuracy</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {results.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default SearchResults;
