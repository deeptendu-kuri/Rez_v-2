import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Tag, Clock, Copy } from 'lucide-react';

function OfferDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const offer = { title: 'Flat 50% Off', description: 'Get 50% off on all orders above ₹1000', code: 'SAVE50', validUntil: '2024-01-31', minPurchase: 1000, maxDiscount: 500, termsConditions: ['Valid on all categories', 'One use per user', 'Cannot be combined with other offers'] };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button>
          <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Offer Details</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-center text-white">
          <Tag className="w-16 h-16 mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
          <p className="text-sm opacity-90">{offer.description}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-dashed border-rez-gray-300 dark:border-dark-600">
          <div className="flex items-center justify-between">
            <div><p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Coupon Code</p><p className="text-2xl font-bold text-rez-navy dark:text-white tracking-wider">{offer.code}</p></div>
            <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold flex items-center gap-2"><Copy className="w-4 h-4" />COPY</button>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-rez-gray-100 dark:bg-dark-800 space-y-2">
          <div className="flex justify-between"><span className="text-sm text-rez-gray-600 dark:text-gray-400">Minimum Purchase</span><span className="text-sm font-bold">₹{offer.minPurchase}</span></div>
          <div className="flex justify-between"><span className="text-sm text-rez-gray-600 dark:text-gray-400">Maximum Discount</span><span className="text-sm font-bold">₹{offer.maxDiscount}</span></div>
          <div className="flex justify-between items-center"><span className="text-sm text-rez-gray-600 dark:text-gray-400">Valid Until</span><div className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-500" /><span className="text-sm font-bold text-amber-600">{new Date(offer.validUntil).toLocaleDateString()}</span></div></div>
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">Terms & Conditions</h3>
          <ul className="space-y-1">{offer.termsConditions.map((term, i) => (<li key={i} className="text-sm text-rez-gray-700 dark:text-gray-300 flex items-start gap-2"><span className="text-blue-500">•</span><span>{term}</span></li>))}</ul>
        </div>
      </div>
    </div>
  );
}

export default OfferDetail;
