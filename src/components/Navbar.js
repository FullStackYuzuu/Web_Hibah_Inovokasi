import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Function to determine if the link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white text-orange-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/LogoUtama.png"
                        alt="Google"
                        className="w-[10rem] mr-2"
                    />{/* Logo */}
                    {/* <span className="ml-[0.5rem] text-lg font-black">LAKSAMANA<br></br>TAPIOKA</span> */}
                </div>
                <div className="space-x-[3rem] font-light text-[14px]">
                    <Link
                        to="/"
                        className={`${isActive('/') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'}
                        rounded-lg hover:text-[15px]`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/catalog"
                        className={`${isActive('/catalog') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'
                            }  rounded-md hover:text-[15px]`}
                    >
                        Catalog
                    </Link>
                    <Link
                        to="/about"
                        className={`${isActive('/about') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'
                            }  rounded-md hover:text-[15px]`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive('/contact') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'
                            }  rounded-md hover:text-[15px]`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
