import FoodCardSkeleton from '@/skeleton/FoodCardSkeleton/FoodCardSkeleton'
import React from 'react'

const FoodPageLoading = () => {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-10">
          {[...Array(15)].map((_, idx) => (
               <FoodCardSkeleton key={idx} />
          ))}
    </div>
  )
}

export default FoodPageLoading
