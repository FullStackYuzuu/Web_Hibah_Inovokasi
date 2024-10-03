import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Breadcrumbs = ({ product }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center space-x-2 text-sm mb-4 font-semibold">
      <button onClick={() => navigate(-1)} className="hover:underline">
        &lt;
      </button>
      <Link to="/catalog" className="hover:underline">Catalog</Link>
      <span>/</span>
      <span>{product.name}</span>
    </nav>
  );
};

export default Breadcrumbs;
