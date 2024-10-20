import React from 'react';

const AdminStatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-3 sm:p-5 md:p-6 shadow-md rounded-lg text-center border border-orange-500"
        >
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 text-orange-500">
            {stat.title}
          </h3>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsGrid;
