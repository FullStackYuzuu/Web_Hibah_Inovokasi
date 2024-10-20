import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminSalesChart from '../components/AdminSalesChart';
import AdminStatsGrid from '../components/AdminStatsGrid';
import AdminLayout from '@/Layouts/AdminLayout';

const AdminHome = ({ statsData, salesData }) => {
    return (
        <AdminLayout>
            <div className="flex min-h-screen bg-gray-50">
                <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-10">
                    <div className="w-full max-w-[1200px] bg-white shadow-md rounded-lg px-4 sm:px-8 py-8">
                        <h1 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h1>

                        <div className="mb-10">
                            <h2 className="text-2xl text-center mb-5 font-semibold text-orange-500">Penjualan Bulan Ini</h2>
                            <AdminSalesChart data={salesData} />
                        </div>

                        <AdminStatsGrid stats={statsData} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminHome;
