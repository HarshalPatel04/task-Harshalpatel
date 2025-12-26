'use client';
import { orderTimeDistribution } from '@/data/restaurant-data';
import React from 'react';
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = orderTimeDistribution;

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#5A78F0" className="font-bold text-lg">
        {payload.name}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 8}
        fill={fill}
      />
    </g>
  );
};

const OrderTime = () => {
  return (
    <div className='w-full h-60'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            activeIndex={0}
            activeShape={renderActiveShape}
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>


      <div className="flex justify-between items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <span className="roboto-gf text-sm">Afternoon</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#7C94F5]"></div>
          <span className="roboto-gf text-sm">Evening</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="roboto-gf w-2 h-2 rounded-full bg-[#E2E8F0]"></div>
          <span className="text-sm roboto-gf">Morning</span>
        </div>
      </div>

    </div>
  );
}

export default OrderTime;