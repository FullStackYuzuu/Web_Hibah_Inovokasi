import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Function to determine if the link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-500 mr-2"></div> {/* Logo */}
                    <span className="ml-[0.5rem] text-lg font-bold">Lorem Ipsum</span>
                </div>
                <div className="space-x-[3rem] font-light text-[14px]">
                    <Link
                        to="/"
                        className={`${isActive('/') ? 'bg-gray-300 text-gray-900' : 'text-gray-300'}
                        py-1 px-3 rounded-md hover:text-[15px]`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/catalog"
                        className={`${isActive('/catalog') ? 'bg-gray-300 text-gray-900' : 'text-gray-300'
                            } py-1 px-3 rounded-md hover:text-[15px]`}
                    >
                        Catalog
                    </Link>
                    <Link
                        to="/about"
                        className={`${isActive('/about') ? 'bg-gray-300 text-gray-900' : 'text-gray-300'
                            } py-1 px-3 rounded-md hover:text-[15px]`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive('/contact') ? 'bg-gray-300 text-gray-900' : 'text-gray-300'
                            } py-1 px-3 rounded-md hover:text-[15px]`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
