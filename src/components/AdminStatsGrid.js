// components/AdminStatsGrid.js
import React from 'react';

const AdminStatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-10 shadow-lg rounded-lg text-center border border-orange-500">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">{stat.title}</h3>
          <p className="text-4xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsGrid;
