import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminSalesChart from '../components/AdminSalesChart';
import AdminStatsGrid from '../components/AdminStatsGrid';

const AdminHome = () => {
  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 2000 },
    { month: 'Apr', sales: 2780 },
    { month: 'May', sales: 1890 },
    { month: 'Jun', sales: 2390 },
    { month: 'Jul', sales: 3490 },
  ];

  const statsData = [
    { title: 'Total Sales This Month', value: '$682.5' },
    { title: 'Total Customers', value: '321' },
    { title: 'Activity', value: '$540.50' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-10">
        <div className="w-full max-w-[1200px] bg-white shadow-md rounded-lg px-4 sm:px-8 py-8">
          <h1 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h1>

          <div className="mb-10">
            <h2 className="text-2xl text-center mb-5 font-semibold text-orange-500">Sales Overview</h2>
            <AdminSalesChart data={salesData} />
          </div>

          <AdminStatsGrid stats={statsData} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
