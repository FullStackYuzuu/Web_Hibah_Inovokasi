// components/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-[250px] bg-orange-500">
                <AdminSidebar /> {/* Admin Sidebar */}
            </aside>

            {/* Main content */}
            <main className="flex-1 p-4 overflow-auto">
                <Outlet /> {/* Admin Pages */}
            </main>
        </div>
    );
};

export default AdminLayout;
