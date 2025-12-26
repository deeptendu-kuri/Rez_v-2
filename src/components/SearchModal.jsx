import { X, Search, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    recentSearches,
    isSearching,
    showResults,
    handleSearch,
    clearRecentSearches,
    trendingSearches
  } = useSearch();

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleResultClick = (type, id) => {
    onClose();
    navigate(`/${type}/${id}`);
  };

  const handleTrendingClick = (query) => {
    setSearchQuery(query);
    handleSearch(query);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="absolute inset-0 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="min-h-screen px-4 pt-20 pb-32">
          <div className="max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-lg"></div>
              <div className="relative flex items-center gap-3 px-6 py-4 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl border border-white/20 dark:border-white/10">
                <Search className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  placeholder="Search stores, products, or categories..."
                  className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none text-base font-medium"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="rounded-3xl bg-white dark:bg-gray-900 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              {showResults && searchQuery.length >= 2 ? (
                <div className="max-h-[600px] overflow-y-auto">
                  {isSearching ? (
                    <div className="p-8 text-center">
                      <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Searching...</p>
                    </div>
                  ) : (
                    <>
                      {/* Stores */}
                      {searchResults.stores.length > 0 && (
                        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-3 px-2">Stores</h3>
                          {searchResults.stores.map((store) => (
                            <button
                              key={store.id}
                              onClick={() => handleResultClick('store', store.id)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center">
                                <span className="text-xl">{store.icon}</span>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="font-semibold text-gray-900 dark:text-white">{store.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{store.category}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Products */}
                      {searchResults.products.length > 0 && (
                        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-3 px-2">Products</h3>
                          {searchResults.products.map((product) => (
                            <button
                              key={product.id}
                              onClick={() => handleResultClick('product', product.id)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                                <span className="text-xl">{product.icon}</span>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="font-semibold text-gray-900 dark:text-white">{product.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{product.category} • ${product.price}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Categories */}
                      {searchResults.categories.length > 0 && (
                        <div className="p-4">
                          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-3 px-2">Categories</h3>
                          {searchResults.categories.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => handleResultClick('category', cat.id)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center">
                                <span className="text-xl">{cat.icon}</span>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="font-semibold text-gray-900 dark:text-white">{cat.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{cat.count} items</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* No Results */}
                      {searchResults.stores.length === 0 &&
                       searchResults.products.length === 0 &&
                       searchResults.categories.length === 0 && (
                        <div className="p-8 text-center">
                          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3">
                            <Search className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">No results found</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Try searching for something else</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div className="p-6">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Recent Searches
                        </h3>
                        <button
                          onClick={clearRecentSearches}
                          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          Clear All
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((query, index) => (
                          <button
                            key={index}
                            onClick={() => handleTrendingClick(query)}
                            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{query}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Searches */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4" />
                      Trending Now
                    </h3>
                    <div className="space-y-2">
                      {trendingSearches.map((query, index) => (
                        <button
                          key={index}
                          onClick={() => handleTrendingClick(query)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{index + 1}</span>
                          </div>
                          <span className="flex-1 text-left font-medium text-gray-700 dark:text-gray-300">{query}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
