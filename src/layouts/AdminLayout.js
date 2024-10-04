import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

// Dummy user data
const dummyUser = {
  name: 'John Doe', // Replace with actual dynamic user data when available
};

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex h-screen">
      {/* Hamburger menu for all screen sizes */}
      <button
        className="fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded focus:outline-none"
        onClick={toggleSidebar}
      >
        {/* Hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar (popup) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[250px] bg-orange-500 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <AdminSidebar user={dummyUser} /> {/* Pass user data to AdminSidebar */}
      </aside>

      {/* Backdrop overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
