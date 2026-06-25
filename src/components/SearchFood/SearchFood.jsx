"use client"
// components/SearchBar.jsx
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchFood() {
  const router = useRouter();
  const params = useSearchParams();

     const handleSearchFood = e => {
          e.preventDefault();

          const form = e.target;
          const searchValue = form.searchFood.value;
          
          const newParams = new URLSearchParams(params.toString());
          newParams.set('search', searchValue);
          router.push(`?${newParams.toString()}`);
     }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form className="flex items-center gap-2" onSubmit={handleSearchFood}>
        <div className="relative flex-1">
          <input
               name='searchFood'
            type="search"
            placeholder="Search food..."
            className="w-full px-4 py-2.5 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <button className="px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap">
          Search
        </button>
      </form>
    </div>
  );
}