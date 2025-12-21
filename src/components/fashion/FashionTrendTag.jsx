import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const FashionTrendTag = ({ trend }) => {
  return (
    <Link
      to={`/fashion/trend/${trend.id}`}
      className="flex items-center gap-2 px-4 py-2 rounded-full shrink-0 active:scale-95 transition-transform"
      style={{
        backgroundColor: `${trend.color}20`,
        borderColor: `${trend.color}40`,
        borderWidth: 1,
      }}
    >
      <TrendingUp className="w-4 h-4" style={{ color: trend.color }} />
      <span className="text-sm font-medium" style={{ color: trend.color }}>
        {trend.tag}
      </span>
      <span className="text-xs text-gray-400">
        {trend.products} items
      </span>
    </Link>
  );
};

export default FashionTrendTag;
