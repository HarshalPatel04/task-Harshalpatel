'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Button } from './ui/button';
import { orderHistory } from '@/data/restaurant-data';

const OrderChart = () => {

  const data = orderHistory;

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-medium">Order</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">2.568</span>
            <span className="text-red-500 text-xs font-semibold">↓ 2.1%</span>
          </div>
          <p className="text-gray-400 text-[10px]">Sales from 1-6 Dec, 2020</p>
        </div>
        <Button variant='outline' className='color1 bg-blue-50 mt-0'>View Report</Button>
      </div>

      <div className='w-full md:w-90 h-40'>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />

            <Line
              type="monotone"
              dataKey="lastWeek"
              name="Last Week"
              stroke="#E2E8F0"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="lastSixDays"
              name="Last 6 Days"
              stroke="#5A78F0"
              strokeWidth={3}
              dot={{ r: 4, fill: '#5A78F0', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 mt-6 border-t pt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bgcolor1"></div>
          <span className="text-xs font-medium">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="roboto-gf w-2 h-2 rounded-full bg-[#E2E8F0]"></div>
          <span className="text-xs font-medium">Last Week</span>
        </div>
      </div>
    </div>
  );
};

export default OrderChart;