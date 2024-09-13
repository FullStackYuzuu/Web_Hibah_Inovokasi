import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLoginButton = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulasikan login dengan langsung mengarahkan ke dashboard admin
        navigate('/admin');
    };

    return (
        <div className="flex justify-center">
            {/*Link ini hanya untuk testing routing saja, karena tidak ada login */}
            <Link
                to="/admin"
            >
                <button
                    className="flex items-center justify-center p-4 bg-gray-800 text-white rounded-lg shadow-lg"
                >
                    {/* Ini Logo Google
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        alt="Google"
                        className="w-6 h-6 mr-2"
                    /> */}
                    <span>MASUK DENGAN GOOGLE</span>
                </button>
            </Link>

        </div>
    );
};

export default AdminLoginButton;
