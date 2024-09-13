import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
      {/* Tombol untuk kembali ke halaman katalog */}
      <button onClick={() => navigate(-1)} className="text-gray-600 hover:underline">
        &lt; 
      </button>
      {/* Breadcrumbs dengan link ke Catalog dan nama produk */}
      <Link to="/catalog" className="hover:underline">Catalog</Link>
      <span>/</span>
      <span>{product.name}</span>
    </nav>
  );
};

export default Breadcrumbs;
