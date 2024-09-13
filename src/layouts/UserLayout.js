import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar yang umum untuk user */}
      <main>
        <Outlet /> {/* Tempat untuk memasukkan halaman */}
      </main>
      <Footer /> {/* Footer yang umum untuk user */}
    </div>
  );
};

export default UserLayout;
