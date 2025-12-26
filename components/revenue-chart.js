'use client';
import { revenueHistory } from '@/data/restaurant-data';
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RevenueChart = () => {

  const data = revenueHistory;

  return (
    <div className='w-full h-60'>
      <ResponsiveContainer>
        <BarChart
          className='cursor-default'
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
          />

          <YAxis axisLine={false} tickLine={false} />

          <Tooltip cursor={{ fill: '#f3f4f6' }} />

          <Bar
            dataKey="current"
            fill="#5A78F0"
            radius={[2, 2, 0, 0]}
            barSize={10}
          />

          <Bar
            dataKey="previous"
            fill="#E5E7EB"
            radius={[2, 2, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart;