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
import AdminProducts from './pages/AdminProducts';
import AdminSales from './pages/AdminSales';
import AdminAccount from './pages/AdminAccount';
import AddEditProduct from './pages/AddEditProduct';
import AddEditSales from './pages/AddEditSales';
import AddEditUser from './pages/AddEditUser';

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
          <Route path="/admin/logout" element={<Home />} /> {/* Redirect to Home for logout */}
        </Route>

        {/* Route untuk admin layout */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />} />

          {/* Route untuk produk */}
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/products/add" element={<AddEditProduct />} />
          <Route path="/admin/products/edit/:id" element={<AddEditProduct />} />

          {/* Route untuk sales */}
          <Route path="/admin/sales" element={<AdminSales />} />
          <Route path="/admin/sales/add" element={<AddEditSales />} />
          <Route path="/admin/sales/edit/:id" element={<AddEditSales />} />

          {/* Route untuk akun */}
          <Route path="/admin/accounts" element={<AdminAccount />} />
          <Route path="/admin/accounts/add" element={<AddEditUser />} />
          <Route path="/admin/accounts/edit/:id" element={<AddEditUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
