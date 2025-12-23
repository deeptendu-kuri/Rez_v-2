import { Link } from 'react-router-dom';

const FashionBrandCard = ({ brand }) => {
  return (
    <Link
      to={`/fashion/brand/${brand.id}`}
      className="min-w-[100px] flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-95 transition-transform relative"
    >
      {/* Tag */}
      {brand.tag && (
        <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-blue-500 text-[8px] text-rez-navy dark:text-white">
          {brand.tag}
        </span>
      )}

      {/* Logo */}
      <div className="w-14 h-14 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
        <span className="text-3xl">{brand.logo}</span>
      </div>

      {/* Name */}
      <p className="text-sm font-medium text-rez-navy dark:text-white">{brand.name}</p>

      {/* Cashback */}
      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] text-emerald-400">
        {brand.cashback}% cashback
      </span>
    </Link>
  );
};

export default FashionBrandCard;
