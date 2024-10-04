import React from 'react';
import AdminLoginButton from '../components/AdminLoginButton';

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-500 text-white">
      <div className="flex flex-col items-center px-4 lg:px-0"> {/* Adjust padding for smaller screens */}
        <div className="flex flex-col items-center">
          <h1 className="font-black text-5xl sm:text-7xl md:text-9xl">ADMIN</h1> {/* Font sizes for different screen sizes */}
          <h2 className="font-black text-xl sm:text-2xl md:text-3xl mt-4">LOGIN PAGE</h2>
        </div>

        <div className="mt-8 p-4 flex items-center bg-orange-600 rounded-[2rem] w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:h-56"> {/* Adjust responsive width */}
          <div className="flex items-center justify-center ml-0 md:ml-[18px] bg-orange-700 rounded-[2rem] w-full h-auto md:w-[570px] md:h-[185px]">
            <AdminLoginButton />
          </div>
        </div>
      </div>

      {/* Left and Right Column (adjust for different screen sizes) */}
      <div className="hidden lg:flex absolute inset-y-0 left-0">
        <div className="h-full w-40 xl:w-64 bg-orange-600 flex flex-col justify-around items-center"> {/* Adjust width for 1024px */}
          {/* Left column content (optional) */}
        </div>
      </div>
      
      <div className="hidden lg:flex absolute inset-y-0 right-0">
        <div className="h-full w-40 xl:w-64 bg-orange-600 flex flex-col justify-around items-center"> {/* Adjust width for 1024px */}
          {/* Right column content (optional) */}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
