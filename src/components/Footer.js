import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;
  return (
    <footer className="bg-white text-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/LogoUtama.png"
            alt="Google"
            className="w-[10rem] mr-2"
          />{/* Logo */}
          {/* <div className="w-8 h-8 bg-orange-500 mr-2"></div> Logo */}
          {/* <span className="ml-[0.5rem] text-lg font-black">LAKSAMANA<br></br>TAPIOKA</span> */}
        </div>
        <div className="space-x-4">
          <Link
            to="/admin-login"
            className={`py-1 px-3 rounded-md hover:text-[13px] text-[12px]`}
          >
            Masuk Sebagai Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
