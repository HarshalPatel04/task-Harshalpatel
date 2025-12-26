'use client';
import { ratings } from '@/data/restaurant-data';
import React from 'react'

const data = ratings;

const YourRating = () => {
    return (
        <div className="bg-white border-b-2 md:border-b-0 w-full max-w-sm p-6">
            <h3 className="font-medium">Your Rating</h3>
            <p className="text-gray-400 text-xs mb-8">Lorem ipsum dolor sit amet, consectetur</p>

            <div className="relative h-48 md:h-60 w-full flex items-center justify-center">

                <div className="absolute top-0 left-10 w-24 md:w-34 h-24 md:h-34 rounded-full bgcolor1 flex flex-col items-center justify-center text-white z-3 border-4 border-white">
                    <span className="text-lg font-bold">{data.foodTaste}%</span>
                    <span className="text-xs">Hygiene</span>
                </div>

                <div className="absolute top-4 right-8 w-32 md:w-42 h-32 md:h-42 rounded-full bg-[#D99A29] flex flex-col items-center justify-center text-white z-2 border-4 border-white">
                    <span className="text-2xl font-bold">{data.hygiene}%</span>
                    <span className="text-sm">Food Taste</span>
                </div>

                <div className="absolute bottom-2 left-6 w-24 md:w-29 h-24 md:h-29 rounded-full bg-[#3AB7BF] flex flex-col items-center justify-center text-white z-4 border-4 border-white">
                    <span className="text-lg font-bold">{data.packaging}%</span>
                    <span className="text-[10px]">Packaging</span>
                </div>

            </div>
        </div>
    );
}

export default YourRating