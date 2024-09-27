import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login with redirect to admin dashboard
    navigate('/admin');
  };

  return (
    <div className="flex justify-center">
      <Link to="/admin">
        <button className="flex items-center justify-center bg-orange-50 text-black font-extrabold rounded-[1.5rem] w-[400px] h-[85px] shadow-lg">
          <img
            src="/GoogleLogo.svg"
            alt="Google"
            className="w-8 h-8 mr-2"
          />
          <span>MASUK DENGAN GOOGLE</span>
        </button>
      </Link>
    </div>
  );
};

export default AdminLoginButton;
