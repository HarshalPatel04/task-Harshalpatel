'use client';
import { mostOrderedFood } from '@/data/restaurant-data';
import React from 'react';

const MostOrderedFood = () => {
    const foodItems = mostOrderedFood;

    return (
        <div className="bg-white border-b-2 md:border-b-0 md:border-r-2 p-6 w-full md:w-90">
            <div className="mb-6">
                <h3 className="font-medium">Most Ordered Food</h3>
                <p className="text-gray-400 text-xs">Adipiscing elit sed do eiusmod tempor</p>
            </div>

            <div className="space-y-4">
                {foodItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl overflow-hidden border border-gray-50">
                                {item.image}
                            </div>

                            <span className="text-gray-600 font-medium text-sm group-hover:text-blue-600 transition-colors">
                                {item.name}
                            </span>
                        </div>

                        <div className="text-gray-400 font-semibold text-xs">
                            {item.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostOrderedFood;