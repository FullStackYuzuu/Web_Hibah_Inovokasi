import React from 'react';
import { Link } from '@inertiajs/react';

const AdminLoginButton = () => {
    return (
        <div className="flex justify-center">
            <Link href="/auth/google/redirect">
                <button className="flex items-center justify-center bg-orange-50 text-black font-extrabold rounded-[1.5rem] w-full sm:w-[280px] md:w-[350px] lg:w-[400px] h-[60px] md:h-[75px] shadow-lg px-4">
                    <img
                        src="/GoogleLogo.svg"
                        alt="Google"
                        className="w-6 h-6 md:w-8 md:h-8 mr-2"
                    />
                    <span className="text-xs sm:text-sm md:text-lg">MASUK DENGAN GOOGLE</span>
                </button>
            </Link>
        </div>
    );
};

export default AdminLoginButton;
