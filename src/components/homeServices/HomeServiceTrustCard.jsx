import { Shield } from 'lucide-react';

const HomeServiceTrustCard = ({ trustItems }) => {
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
      <div className="flex items-center gap-2 mb-3">
        <Shield className="w-5 h-5 text-emerald-400" />
        <h3 className="font-semibold text-rez-navy dark:text-white">Why book via ReZ?</h3>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
            <span>{item.icon}</span>
            <span className="text-xs text-rez-gray-700 dark:text-gray-300">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServiceTrustCard;
