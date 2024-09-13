import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Product from './pages/ProductDetail';
import AdminHome from './pages/AdminHome';
import AdminLoginPage from './pages/AdminLoginPage';
import UserLayout from './layouts/UserLayout';  // Layout untuk user
import AdminLayout from './layouts/AdminLayout';  // Layout untuk admin

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk user layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>

        {/* Route untuk admin layout */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
