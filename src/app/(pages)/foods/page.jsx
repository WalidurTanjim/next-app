import FoodCard from '@/components/FoodCard/FoodCard';
import SearchFood from '@/components/SearchFood/SearchFood';
import React from 'react'

const getFoods = async(search) => {
     try{
          const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
          const data = await res.json();
          return data?.foods || [];
     }catch(err) {
          console.error(err);
          return null;
     }
}

const FoodsPage = async({ searchParams }) => {
     const { search = "" } = await searchParams;
     // console.log(search);

     // call getFoods function to fetch all foods
     const foods = await getFoods(search);
     // console.log(foods);

     if(foods === null) {
          return <h1 className='text-center text-2xl text-slate-700 font-medium py-10'>Failed to load foods. Please try again later.</h1>
     }

     if(!foods || foods.length === 0) {
          return <h1 className='text-center text-2xl text-slate-700 font-medium py-10'>No foods available at the moment.</h1>
     }

     return (
          <div className='w-full px-2 md:px-5 lg:px-8 py-10'>
               <h1 className='text-center text-2xl text-slate-700 font-medium'>All Foods in Here <span className='text-orange-500'>{foods?.length || 0}</span> items</h1>

               <div className='pt-10'>
                    <SearchFood />
               </div>

               <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-10">
                    {
                         foods.map(food => <FoodCard key={food.id} food={food} />)
                    }
               </div>
          </div>
     )
}

export default FoodsPage
