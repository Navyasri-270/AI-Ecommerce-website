import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Star, ShoppingCart, ShieldCheck, Check, Truck, RotateCcw, AlertTriangle } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await API.get(`/products/${id}`);
        if (res.data.success) {
          setProduct(res.data.data);
          setRelated(res.data.related || []);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError(err.response?.data?.message || 'Error retrieving product information');
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
    setQuantity(1); // Reset quant selection
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setAdding(true);
    const res = await addToCart(product._id, quantity);
    setAdding(false);

    if (res && res.success) {
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } else {
      alert(res?.error || 'Failed to add item');
    }
  };

  if (loading) return <LoadingSpinner fullPage />;

  if (error || !product) {
    return (
      <div className="max-w-md mx-auto my-16 px-4 text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Product Not Found</h2>
        <p className="text-sm text-slate-500">{error || "The product you're looking for doesn't exist or has been removed."}</p>
        <Link
          to="/products"
          className="inline-block px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow transition-colors"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Detail Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
        
        {/* Left Image Section */}
        <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center"
          />
          {product.stock === 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Out of Stock
            </span>
          )}
        </div>

        {/* Right Info Section */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            {/* Category / Brand metadata */}
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>{product.brand}</span>
              <span className="text-slate-300">•</span>
              <span className="text-primary-600">{product.category}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {product.title}
            </h1>

            {/* Stars rating */}
            <div className="flex items-center space-x-2 pt-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-700">{product.rating.toFixed(1)} Rating</span>
              <span className="text-slate-300 text-sm">|</span>
              <span className="text-xs text-slate-500 font-medium">Free standard shipping</span>
            </div>
          </div>

          {/* Price Tag */}
          <div className="border-y border-slate-100 py-4">
            <span className="text-3xl font-extrabold text-slate-900">
              ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
            <p className="text-xs text-slate-400 mt-1">Local taxes included. Duties calculated at checkout.</p>
          </div>

          {/* Description */}
          <div className="space-y-2 text-left">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Product Description</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Stock state */}
          <div className="flex items-center space-x-2 text-sm font-semibold">
            <span className="text-slate-500">Availability:</span>
            {product.stock > 0 ? (
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-bold">
                {product.stock} units in stock
              </span>
            ) : (
              <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded-full text-xs font-bold">
                Temporarily Out of Stock
              </span>
            )}
          </div>

          {/* Cart Quantity Selector & Add actions */}
          {product.stock > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold text-slate-500">Qty:</span>
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-1.5 hover:bg-slate-50 text-slate-600 font-semibold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-slate-800 min-w-[40px] text-center bg-slate-50">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                    className="px-3 py-1.5 hover:bg-slate-50 text-slate-600 font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={handleAddToCart}
                  disabled={adding}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-md ${
                    added
                      ? 'bg-emerald-500 text-white shadow-emerald-100'
                      : 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-100'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Item Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>{adding ? 'Adding...' : 'Add to Cart'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Delivery & Warranty info details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-slate-400" />
              <span>Fast Dispatch</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4 text-slate-400" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>100% Genuine</span>
            </div>
          </div>

        </div>

      </div>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Related Products</h2>
            <p className="text-xs text-slate-400 font-medium">Explore items you might also love in {product.category}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(prod => (
              <ProductCard key={prod._id} product={prod} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetails;
