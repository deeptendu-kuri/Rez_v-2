import { Link } from 'react-router-dom';

const FashionOccasionCard = ({ occasion }) => {
  return (
    <Link
      to={`/fashion/occasion/${occasion.id}`}
      className="min-w-[140px] p-4 rounded-2xl shrink-0 relative overflow-hidden active:scale-95 transition-transform"
      style={{
        background: `linear-gradient(135deg, ${occasion.color}30 0%, ${occasion.color}10 100%)`,
        borderColor: `${occasion.color}30`,
        borderWidth: 1,
      }}
    >
      {/* Tag */}
      {occasion.tag && (
        <span
          className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] text-rez-navy dark:text-white font-medium"
          style={{ backgroundColor: occasion.color }}
        >
          {occasion.tag}
        </span>
      )}

      {/* Icon */}
      <div className="text-4xl mb-3">{occasion.icon}</div>

      {/* Content */}
      <h3 className="text-sm font-semibold text-rez-navy dark:text-white">{occasion.name}</h3>
      <p className="text-xs text-emerald-400 mt-1">Up to {occasion.discount}% Off</p>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at bottom right, ${occasion.color} 0%, transparent 70%)`
        }}
      />
    </Link>
  );
};

export default FashionOccasionCard;
