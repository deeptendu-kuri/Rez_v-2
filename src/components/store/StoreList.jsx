import StoreCard from './StoreCard';

const StoreList = ({ stores, emptyMessage = "No stores found" }) => {
  if (!stores || stores.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <span className="text-4xl mb-4">🔍</span>
        <h3 className="text-lg font-semibold text-white mb-2">Nothing matches</h3>
        <p className="text-sm text-gray-400 text-center max-w-[280px]">
          {emptyMessage}
        </p>
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 rounded-full bg-white/10 text-sm text-white">
            Change mode
          </button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-sm text-white">
            Try nearby
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 px-4">
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} variant="list" />
      ))}
    </div>
  );
};

export default StoreList;
