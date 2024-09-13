import React from 'react';
import AdminNavbar from '../components/AdminNavbar'; // Navbar berbeda untuk admin
import AdminFooter from '../components/AdminFooter'; // Footer berbeda untuk admin
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <AdminNavbar /> {/* Navbar yang khusus untuk admin */}
            <main>
                <Outlet /> {/* Tempat untuk memasukkan halaman admin */}
            </main>
            <AdminFooter /> {/* Footer yang khusus untuk admin */}
        </div>
    );
};

export default AdminLayout;
