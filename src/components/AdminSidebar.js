// components/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="flex flex-col h-full justify-between py-5">
      {/* Upper menu items */}
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-white text-2xl font-bold mb-10">Admin Menu</h2>
        <ul className="space-y-5 w-full text-center">
          <li>
            <Link
              to="/admin"
              className="text-white block transition-transform duration-300 hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className="text-white block transition-transform duration-300 hover:scale-105"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/sales"
              className="text-white block transition-transform duration-300 hover:scale-105"
            >
              Sales
            </Link>
          </li>
          <li>
            <Link
              to="/admin/accounts"
              className="text-white block transition-transform duration-300 hover:scale-105"
            >
              Accounts
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout positioned at the bottom */}
      <div className="text-center">
        <Link
          to="/admin/logout"
          className="text-white block transition-transform duration-300 hover:scale-105"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
