// components/FoodCardSkeleton.jsx
export default function FoodCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <div className="absolute top-2 right-2 bg-gray-300 text-transparent text-xs px-2 py-1 rounded">
          Loading
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-4">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

        {/* Price Skeleton */}
        <div className="h-5 bg-gray-200 rounded w-1/4 mt-1"></div>

        {/* Buttons Skeleton */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          {/* Add to Cart Button Skeleton */}
          <div className="h-9 bg-gray-200 rounded w-28"></div>

          {/* Icon Buttons Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}