// app/food/[id]/page.jsx
import React from 'react';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';

const getFoodById = async (id) => {
  try {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    return data.details || {};
  } catch (err) {
    console.error(err);
    return null;
  }
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getFoodById(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Food not found</h2>
          <p className="text-gray-500 mt-2">The item you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Image */}
        <div className="relative">
          <div className="relative h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden bg-gray-100">
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Category Badge */}
          <span className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-3 py-1.5 rounded">
            {food.category}
          </span>
        </div>

        {/* Right Column - Details */}
        <div className="flex flex-col justify-start">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {food.title}
          </h1>

          {/* Price */}
          <div className="mt-3">
            <span className="text-3xl font-bold text-gray-800">
              ${(food.price / 100).toFixed(2)}
            </span>
          </div>

          {/* Divider */}
          <hr className="my-4 border-gray-200" />

          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="text-sm font-medium text-gray-700">{food.category}</span>
          </div>

          {/* ID */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-500">Item ID:</span>
            <span className="text-sm text-gray-600">#{food.id}</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <ShoppingCartIcon className="w-5 h-5" />
                Add to Cart
              </button>
              
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <HeartIcon className="w-5 h-5" />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;