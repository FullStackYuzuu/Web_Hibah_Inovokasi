import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <span>Lorem Ipsum</span> */}
        </div>
        <div className="space-x-4">
          <Link
            to="/admin-login"
            className={`text-gray-300 py-1 px-3 rounded-md hover:text-[13px] text-[12px]`}
          >
            Masuk Sebagai Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
