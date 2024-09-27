import React from 'react';
import AdminLoginButton from '../components/AdminLoginButton';

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-500 text-white">
      <div className='flex flex-col items-center'>
        <div className="flex flex-col items-center">
          <h1 className="font-black text-9xl">ADMIN</h1>
          <h2 className="font-black text-2xl line-height: 2rem;">LOGIN PAGE</h2>
        </div>

        <div className="mt-8 p-4 flex items-center bg-orange-600 rounded-[3rem] w-[636px] h-56">
          <div className="flex items-center justify-center ml-[18px] bg-orange-700 rounded-[3rem] w-[570px] h-[185px]">
            <AdminLoginButton />
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex flex-col justify-between">
        <div className="h-full w-96 bg-orange-600 flex flex-col justify-around items-center">
          {/* Add your left column content here (optional) */}
        </div>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex flex-col justify-between">
        <div className="h-full w-96 bg-orange-600 flex flex-col justify-around items-center">
          {/* Add your right column content here (optional) */}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
