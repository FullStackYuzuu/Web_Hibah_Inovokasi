import React from 'react';
import { Link, usePage } from '@inertiajs/react';

const Footer = () => {
    //   const location = useLocation();
    const { url } = usePage();
    // Function to determine if the link is active
    const isActive = (path) => url === path;

    return (
        <footer className="bg-white text-orange-500 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Logo Section */}
                <div className="flex items-center justify-center md:justify-start">
                    <img
                        src="/LogoUtama.png"
                        alt="Laksamana Tapioka"
                        className="w-[8rem] sm:w-[10rem] mr-2"
                    />{/* Logo */}
                </div>

                {/* Admin Login Link */}
                <div className="flex justify-center md:justify-end">
                    <Link
                        href="/admin-login"
                        className="py-1 px-3 rounded-md text-[12px] md:text-[14px] hover:text-[13px]"
                    >
                        Masuk Sebagai Admin
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
