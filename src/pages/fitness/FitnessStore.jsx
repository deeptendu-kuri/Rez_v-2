import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, TrendingUp } from 'lucide-react';

function FitnessStore() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('equipment');

  const products = {
    equipment: [
      { id: 1, name: 'Adjustable Dumbbells', brand: 'PowerMax', price: 3999, mrp: 5999, rating: 4.7, trending: true, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400' },
      { id: 2, name: 'Yoga Mat Premium', brand: 'FitYoga', price: 799, mrp: 1200, rating: 4.8, trending: false, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400' }
    ],
    supplements: [
      { id: 3, name: 'Whey Protein 2kg', brand: 'MuscleBlaze', price: 2499, mrp: 3500, rating: 4.6, trending: true, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400' },
      { id: 4, name: 'BCAA Energy', brand: 'Optimum', price: 1299, mrp: 1800, rating: 4.5, trending: false, image: 'https://images.unsplash.com/photo-1608137284897-2e3e1f2e8b7d?w=400' }
    ],
    apparel: [
      { id: 5, name: 'Training T-Shirt', brand: 'Nike', price: 1299, mrp: 1999, rating: 4.7, trending: false, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
      { id: 6, name: 'Running Shoes', brand: 'Adidas', price: 4999, mrp: 7999, rating: 4.9, trending: true, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' }
    ]
  };

  const currentProducts = products[activeTab] || [];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Fitness Store</h1></div><p className="text-xs text-white/80">Equipment, supplements & apparel</p></div>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('equipment')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'equipment' ? 'bg-emerald-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Equipment</button>
          <button onClick={() => setActiveTab('supplements')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'supplements' ? 'bg-emerald-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Supplements</button>
          <button onClick={() => setActiveTab('apparel')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'apparel' ? 'bg-emerald-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Apparel</button>
        </div>
      </div>
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {currentProducts.map(product => (
          <div key={product.id} onClick={() => navigate(`/fitness/product/${product.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 transition-all cursor-pointer">
            <div className="relative h-40">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.trending && <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" />Hot</div>}
            </div>
            <div className="p-3">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{product.brand}</p>
              <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-2">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /><span className="text-xs font-semibold">{product.rating}</span></div>
              <div className="flex items-center gap-2"><span className="text-lg font-bold text-rez-navy dark:text-white">₹{product.price}</span><span className="text-xs text-rez-gray-400 line-through">₹{product.mrp}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessStore;
