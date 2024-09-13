import React from 'react';
import AdminLoginButton from '../components/AdminLoginButton'

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Admin Login</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <AdminLoginButton />
      </div>
    </div>
  );
};

export default AdminLoginPage;
