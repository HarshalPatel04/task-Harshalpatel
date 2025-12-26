import RevenueChart from '@/components/revenue-chart'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import React, { Suspense } from 'react'
import YourRating from '@/components/your-rating'
import MostOrderedFood from '@/components/most-order-food'
import OrderTime from '@/components/order-time'
import OrderChart from '@/components/order'

const Dashboard = () => {
  return (
    <div className='sm:w-full md:w-full p-6 pt-26 pl-auto md:pl-65 box-content'>
      <h1 className=' text-xl font-medium pb-2'>Dashboard</h1>
      <div className='flex-row md:flex flex-wrap w-full'>
        <div className='border-b-2 md:border-r-2 p-4 md:w-200 md:max-h-100'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-medium'>Revenue</h1>
            </div>
            <Button variant='outline' className='color1 bg-blue-50 mt-0'>View Report</Button>
          </div>
          <h2 className='font-bold roboto-gf text-lg'>IDR 7.852.000</h2>
          <div className='flex items-center text-xs space-x-1'>
            <ArrowUp className='size-4 text-green-700' />
            <span className='text-green-700'>2.1%</span>
            <p className='text-gray-500'>vs last week</p>
          </div>
          <div>
            <h2 className='text-gray-500 text-sm roboto-gf py-3'>Sales from 1-12 Dec, 2020</h2>
            <Suspense>
              <RevenueChart />
            </Suspense>
          </div>
        </div>
        <div className='border-b-2 p-6 md:w-107'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-medium'>Order Time</h1>
            </div>
            <Button variant='outline' className='color1 bg-blue-50 mt-0'>View Report</Button>
          </div>
          <div className='w-full'>
            <h2 className='text-gray-500 text-sm roboto-gf py-3'>Sales from 1-12 Dec, 2020</h2>
            <Suspense>
              <OrderTime />
            </Suspense>
          </div>
        </div>
        <div className='md:w-110 border-r-2'>
          <YourRating />
        </div>
        <div>
          <MostOrderedFood />
        </div>
        <div>
          <OrderChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard