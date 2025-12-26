// Skeleton Loader Components for Better UX

export const SkeletonCard = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-full"></div>
  </div>
);

export const SkeletonProductCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg animate-pulse">
    {/* Image */}
    <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-48 mb-3"></div>

    {/* Title */}
    <div className="bg-gray-200 dark:bg-gray-800 rounded h-4 w-3/4 mb-2"></div>

    {/* Subtitle */}
    <div className="bg-gray-200 dark:bg-gray-800 rounded h-3 w-1/2 mb-3"></div>

    {/* Price */}
    <div className="flex items-center gap-2">
      <div className="bg-gray-200 dark:bg-gray-800 rounded h-5 w-20"></div>
      <div className="bg-gray-200 dark:bg-gray-800 rounded h-4 w-16"></div>
    </div>
  </div>
);

export const SkeletonStoreCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg animate-pulse">
    <div className="flex items-center gap-3 mb-3">
      {/* Logo */}
      <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-16 w-16"></div>

      <div className="flex-1">
        {/* Store Name */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded h-4 w-32 mb-2"></div>
        {/* Category */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded h-3 w-24"></div>
      </div>
    </div>

    {/* Cashback */}
    <div className="bg-gray-200 dark:bg-gray-800 rounded h-8 w-full"></div>
  </div>
);

export const SkeletonList = ({ count = 3, children: SkeletonComponent = SkeletonCard }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonComponent key={index} />
    ))}
  </div>
);

export const SkeletonGrid = ({ count = 6, cols = 2, children: SkeletonComponent = SkeletonProductCard }) => (
  <div className={`grid grid-cols-${cols} gap-4`}>
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonComponent key={index} />
    ))}
  </div>
);

export const SkeletonHeader = () => (
  <div className="animate-pulse px-4 py-3">
    <div className="flex items-center justify-between mb-4">
      {/* Logo */}
      <div className="bg-gray-200 dark:bg-gray-800 rounded h-8 w-24"></div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-10 w-20"></div>
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-10 w-10"></div>
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-10 w-10"></div>
      </div>
    </div>

    {/* Search Bar */}
    <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-14 w-full"></div>
  </div>
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 dark:bg-gray-800 rounded h-4"
        style={{ width: index === lines - 1 ? '60%' : '100%' }}
      ></div>
    ))}
  </div>
);

export default {
  Card: SkeletonCard,
  ProductCard: SkeletonProductCard,
  StoreCard: SkeletonStoreCard,
  List: SkeletonList,
  Grid: SkeletonGrid,
  Header: SkeletonHeader,
  Text: SkeletonText,
};
