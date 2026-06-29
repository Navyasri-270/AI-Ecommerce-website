import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">NexShop</h2>
            <p className="text-sm">
              Discover the future of shopping with our AI-powered semantic search catalog and personalized recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/products?category=Mobile Phones" className="hover:text-white transition-colors">Mobile Phones</a></li>
              <li><a href="/products?category=Laptops" className="hover:text-white transition-colors">Laptops</a></li>
              <li><a href="/products?category=Electronics" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="/products?category=Fashion" className="hover:text-white transition-colors">Fashion</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/orders" className="hover:text-white transition-colors">My Orders</a></li>
              <li><a href="/cart" className="hover:text-white transition-colors">Shopping Cart</a></li>
              <li><a href="/profile" className="hover:text-white transition-colors">My Account</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">AI Technologies</h3>
            <p className="text-sm">
              Leveraging advanced vector embeddings and high-performance matching algorithms to understand context and query intent.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} NexShop Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
