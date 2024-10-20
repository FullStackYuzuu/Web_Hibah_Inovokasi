import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Navbar = () => {
    const { url } = usePage(); // Mendapatkan URL saat ini dari Inertia
    const [isOpen, setIsOpen] = useState(false); // State untuk toggle mobile

    // Fungsi untuk menentukan apakah link aktif
    const isActive = (path) => url === path;

    return (
        <nav className="w-full bg-white text-orange-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/LogoUtama.png"
                        alt="Laksamana Tapioka"
                        className="w-[8rem] sm:w-[10rem] 3xl:w-[12rem] 4xl:w-[14rem] mr-2"
                    />
                </div>

                {/* Tombol toggle untuk mobile */}
                <button
                    className="block md:hidden text-orange-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
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

                {/* Menu untuk layar besar */}
                <div className="hidden md:flex space-x-[1rem] lg:space-x-[2rem] font-light text-[14px] lg:text-[16px] 4xl:text-[18px]">
                    <Link
                        href="/"
                        className={`${isActive('/') ? 'bg-orange-500 text-white py-2 px-4 transition-all duration-300' : 'text-orange-500 transition-all duration-300'} rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/catalog"
                        className={`${isActive('/catalog') ? 'bg-orange-500 text-white py-2 px-4 transition-all duration-300' : 'text-orange-500 transition-all duration-300'} rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        Catalog
                    </Link>
                    <Link
                        href="/about"
                        className={`${isActive('/about') ? 'bg-orange-500 text-white py-2 px-4 transition-all duration-300' : 'text-orange-500 transition-all duration-300'} rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={`${isActive('/contact') ? 'bg-orange-500 text-white py-2 px-4 transition-all duration-300' : 'text-orange-500 transition-all duration-300'} rounded-lg hover:text-lg lg:hover:text-xl`}
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Menu popup untuk mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-500 ease-in-out">
                    <div className="bg-white w-[80%] max-w-[400px] lg:max-w-[600px] p-6 rounded-lg shadow-lg opacity-100 transition-opacity duration-500 ease-in">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-orange-500 text-[24px] font-bold"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col space-y-4 text-center">
                            <Link
                                href="/"
                                className={`${isActive('/') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} rounded-lg`}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/catalog"
                                className={`${isActive('/catalog') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} rounded-lg`}
                                onClick={() => setIsOpen(false)}
                            >
                                Catalog
                            </Link>
                            <Link
                                href="/about"
                                className={`${isActive('/about') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} rounded-lg`}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className={`${isActive('/contact') ? 'bg-orange-500 text-white py-2 px-4' : 'text-orange-500'} rounded-lg`}
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
