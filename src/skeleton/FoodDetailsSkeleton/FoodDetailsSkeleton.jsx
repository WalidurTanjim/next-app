// components/FoodDetailsSkeleton.jsx
import React from 'react';

export default function FoodDetailsSkeleton() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Image Skeleton */}
        <div className="relative">
          <div className="relative h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden bg-gray-200 animate-pulse">
            {/* Category Badge Skeleton */}
            <div className="absolute top-4 left-4 bg-gray-300 text-transparent text-xs px-3 py-1.5 rounded">
              Loading
            </div>
          </div>
        </div>

        {/* Right Column - Details Skeleton */}
        <div className="flex flex-col justify-start">
          {/* Title Skeleton */}
          <div className="h-9 md:h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>

          {/* Price Skeleton */}
          <div className="mt-3">
            <div className="h-9 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          </div>

          {/* Divider Skeleton */}
          <hr className="my-4 border-gray-200" />

          {/* Category Skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          </div>

          {/* ID Skeleton */}
          <div className="flex items-center gap-2 mt-1">
            <div className="h-4 bg-gray-200 rounded w-14 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}