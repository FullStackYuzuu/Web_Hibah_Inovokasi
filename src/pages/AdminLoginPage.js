import React from 'react';
import AdminSalesChart from '../components/AdminSalesChart';
import AdminStatsGrid from '../components/AdminStatsGrid';

const AdminHome = () => {
  // Dynamic sales data for the chart
  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 2000 },
    { month: 'Apr', sales: 2780 },
    { month: 'May', sales: 1890 },
    { month: 'Jun', sales: 2390 },
    { month: 'Jul', sales: 3490 },
  ];

  // Dynamic stats data
  const statsData = [
    { title: 'Total Sales This Month', value: '$682.5' },
    { title: 'Total Customers', value: '321' },
    { title: 'Activity', value: '$540.50' },
  ];

  return (
    <div className="flex min-h-screen">
      

      <div className="flex-1 p-4">
        <div className="w-full max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h1>

          <div className="mb-10">
            <h2 className="text-2xl text-center mb-5 font-semibold text-orange-500">Sales Overview</h2>
            {/* Pass dynamic data to AdminSalesChart */}
            <AdminSalesChart data={salesData} />
          </div>

          {/* Render AdminStatsGrid with dynamic data */}
          <AdminStatsGrid stats={statsData} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
