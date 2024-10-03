import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false); // State untuk toggle navbar pada mobile

    // Function to determine if the link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="w-full bg-white text-orange-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/LogoUtama.png"
                        alt="Laksamana Tapioka"
                        className="w-[8rem] sm:w-[10rem] 3xl:w-[12rem] 4xl:w-[14rem] mr-2"
                    />{/* Logo */}
                </div>

                {/* Toggle button for mobile */}
                <button
                    className="block md:hidden text-orange-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Menu Items for larger screens */}
                <div className="hidden md:flex space-x-[1rem] lg:space-x-[2rem] font-light text-[14px] lg:text-[16px] 4xl:text-[18px]">
                    <Link
                        to="/"
                        className={`${isActive('/') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
            rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/catalog"
                        className={`${isActive('/catalog') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
            rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        Catalog
                    </Link>
                    <Link
                        to="/about"
                        className={`${isActive('/about') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
            rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive('/contact') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
            rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Popup Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white w-[80%] max-w-[400px] lg:max-w-[600px] p-6 rounded-lg shadow-lg">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-orange-500 text-[24px] font-bold"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col space-y-4 text-center">
                            <Link
                                to="/"
                                className={`${isActive('/') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
                rounded-lg`}
                                onClick={() => setIsOpen(false)} // Tutup popup saat diklik
                            >
                                Home
                            </Link>
                            <Link
                                to="/catalog"
                                className={`${isActive('/catalog') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
                rounded-lg`}
                                onClick={() => setIsOpen(false)}
                            >
                                Catalog
                            </Link>
                            <Link
                                to="/about"
                                className={`${isActive('/about') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
                rounded-lg`}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className={`${isActive('/contact') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} 
                rounded-lg`}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
