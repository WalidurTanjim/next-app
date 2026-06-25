"use client"
// components/FoodCard.jsx
import { HeartIcon, ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const FoodCard = ({food}) => {
     console.log(food)

     const [isWishlisted, setIsWishlisted] = useState(false);

     const handleAddToCart = () => {
          console.log('Added to cart:', food.title);
          // Add your cart logic here
     };

     const handleDetails = () => {
          console.log('View details:', food.title);
          // Add your details navigation logic here
     };

     const handleWishlist = () => {
          setIsWishlisted(!isWishlisted);
          console.log('Wishlist toggled:', food.title);
          // Add your wishlist logic here
     };

     return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xs w-full">
               {/* Image */}
               <div className="relative h-48 overflow-hidden">
                    <img
                         src={food.foodImg}
                         alt={food.title}
                         className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                         {food.category}
                    </span>
               </div>

               {/* Content */}
               <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                         {food.title}
                    </h3>

                    {/* Price */}
                    <p className="text-gray-600 font-medium mt-1">
                         ${(food.price / 100).toFixed(2)}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                         <button
                              onClick={handleAddToCart}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition-colors"
                         >
                              <ShoppingCartIcon className="w-4 h-4" />
                              {/* Add to Cart */}
                         </button>

                         <div className="flex items-center gap-2">
                              <button
                                   onClick={handleDetails}
                                   className="p-1.5 text-gray-600 hover:text-gray-800 transition-colors"
                                   aria-label="View details"
                              >
                                   <EyeIcon className="w-5 h-5" />
                              </button>

                              <button
                                   onClick={handleWishlist}
                                   className="p-1.5 text-gray-600 hover:text-red-500 transition-colors"
                                   aria-label="Add to wishlist"
                              >
                                   {isWishlisted ? (
                                        <HeartSolidIcon className="w-5 h-5 text-red-500" />
                                   ) : (
                                        <HeartIcon className="w-5 h-5" />
                                   )}
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default FoodCard
