import { Link } from 'react-router-dom';

const FashionVibeCard = ({ vibe }) => {
  return (
    <Link
      to={`/fashion/vibe/${vibe.id}`}
      className="min-w-[100px] flex flex-col items-center gap-2 p-4 rounded-2xl shrink-0 active:scale-95 transition-transform"
      style={{ backgroundColor: `${vibe.color}15` }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${vibe.color}30` }}
      >
        <span className="text-3xl">{vibe.icon}</span>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-white">{vibe.name}</p>
        <p className="text-[10px] text-gray-400 mt-0.5">{vibe.description}</p>
      </div>
    </Link>
  );
};

export default FashionVibeCard;
