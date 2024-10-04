import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-full justify-between py-5 bg-orange-500">
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-10">Admin Menu</h2>
        <ul className="space-y-3 md:space-y-5 w-full text-center">
          <li>
            <Link
              to="/admin"
              className={`block transition-transform duration-300 hover:scale-105 px-4 py-2 ${
                isActive('/admin')
                  ? 'bg-white text-orange-500 rounded-lg'
                  : 'text-white'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className={`block transition-transform duration-300 hover:scale-105 px-4 py-2 ${
                isActive('/admin/products')
                  ? 'bg-white text-orange-500 rounded-lg'
                  : 'text-white'
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/sales"
              className={`block transition-transform duration-300 hover:scale-105 px-4 py-2 ${
                isActive('/admin/sales')
                  ? 'bg-white text-orange-500 rounded-lg'
                  : 'text-white'
              }`}
            >
              Sales
            </Link>
          </li>
          <li>
            <Link
              to="/admin/accounts"
              className={`block transition-transform duration-300 hover:scale-105 px-4 py-2 ${
                isActive('/admin/accounts')
                  ? 'bg-white text-orange-500 rounded-lg'
                  : 'text-white'
              }`}
            >
              Accounts
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <Link
          to="/admin/logout"
          className="text-white block transition-transform duration-300 hover:scale-105 px-4 py-2"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
