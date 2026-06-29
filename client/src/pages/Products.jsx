import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { SlidersHorizontal, ArrowUpDown, RefreshCw } from 'lucide-react';

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

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  // Load URL queries on startup
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    const search = params.get('search');
    
    if (cat) setSelectedCategory(cat);
    if (search) setSelectedBrand(search); // use search word for brand filter or trigger catalog search

    fetchCatalog(cat, search);
  }, [location.search]);

  const fetchCatalog = async (catParam, searchParam) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      
      const category = catParam !== undefined ? catParam : selectedCategory;
      if (category) queryParams.append('category', category);

      const brand = selectedBrand;
      if (brand) queryParams.append('brand', brand);

      if (minPrice) queryParams.append('minPrice', minPrice);
      if (maxPrice) queryParams.append('maxPrice', maxPrice);

      const search = searchParam !== undefined ? searchParam : '';
      if (search) queryParams.append('search', search);

      const res = await API.get(`/products?${queryParams.toString()}`);
      if (res.data.success) {
        let fetchedProds = res.data.data;
        
        // Handle sorting in client side for simplicity and speed
        if (sortOrder === 'price-low') {
          fetchedProds.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-high') {
          fetchedProds.sort((a, b) => b.price - a.price);
        } else if (sortOrder === 'rating') {
          fetchedProds.sort((a, b) => b.rating - a.rating);
        }

        setProducts(fetchedProds);
      }
    } catch (err) {
      console.error('Error fetching catalog data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setMinPrice('');
    setMaxPrice('');
    setSortOrder('newest');
    // Fetch clean catalog
    fetchCatalog('', '');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left filter side panel */}
        <aside className="w-full md:w-64 flex-shrink-0 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h2 className="font-extrabold text-slate-900 flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              <span>Filters</span>
            </h2>
            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-6 mt-6">
            {/* Category Select */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Category
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => { setSelectedCategory(''); fetchCatalog('', selectedBrand); }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    !selectedCategory ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  All Categories
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); fetchCatalog(cat, selectedBrand); }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === cat ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Price Range ($)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
                />
                <span className="text-slate-300">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
                />
              </div>
              <button
                onClick={() => fetchCatalog()}
                className="mt-3 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow transition-colors"
              >
                Apply Price
              </button>
            </div>

            {/* Brand Search */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Brand Search
              </label>
              <input
                type="text"
                placeholder="e.g. Apple, Sony..."
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
              />
              <button
                onClick={() => fetchCatalog()}
                className="mt-2 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow transition-colors"
              >
                Apply Brand
              </button>
            </div>

          </div>
        </aside>

        {/* Right products listing */}
        <main className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Showing <span className="text-slate-800 font-bold">{products.length}</span> products
            </p>

            {/* Sorting controls */}
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <select
                value={sortOrder}
                onChange={(e) => { setSortOrder(e.target.value); fetchCatalog(); }}
                className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : products.length === 0 ? (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-16 text-center shadow-sm">
              <span className="text-5xl">🛍️</span>
              <h2 className="mt-4 text-xl font-extrabold text-slate-800">No products found</h2>
              <p className="mt-2 text-slate-500 max-w-sm mx-auto">
                We couldn't find any products matching your active filters. Try adjusting or resetting them.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-md transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default Products;
