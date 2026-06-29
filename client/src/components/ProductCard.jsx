import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Star, ShoppingCart, Check } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault(); // Prevent navigating to details page
    e.stopPropagation();

    if (!user) {
      navigate('/login');
      return;
    }

    setAdding(true);
    const result = await addToCart(product._id, 1);
    setAdding(false);

    if (result && result.success) {
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } else {
      alert(result?.error || 'Failed to add item to cart');
    }
  };

  return (
    <div className="group relative bg-white border border-slate-100 hover:border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* Product Image */}
      <Link to={`/products/${product._id}`} className="block relative aspect-square bg-slate-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.stock === 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Out of Stock
          </span>
        )}
        {product.searchScore && (
          <span className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center space-x-1 shadow">
            <span>AI Match: {Math.round(product.searchScore * 100)}%</span>
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          <span>{product.brand}</span>
          <span className="bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">{product.category}</span>
        </div>

        {/* Title */}
        <Link to={`/products/${product._id}`} className="mt-2 block">
          <h3 className="text-sm font-semibold text-slate-800 hover:text-primary-600 line-clamp-2 transition-colors min-h-[40px]">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center space-x-1">
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-xs font-bold text-slate-700">{product.rating.toFixed(1)}</span>
          <span className="text-slate-300 text-xs">|</span>
          <span className="text-[10px] text-slate-400 font-medium">{product.stock > 0 ? `${product.stock} in stock` : 'Restocking soon'}</span>
        </div>

        {/* Price & Add To Cart Button */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-slate-900">
            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || adding}
            className={`p-2.5 rounded-xl transition-all ${
              product.stock === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : added
                ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-200'
                : 'bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white'
            }`}
            title="Add to Cart"
          >
            {added ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;
