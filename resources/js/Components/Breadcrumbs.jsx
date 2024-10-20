import React from 'react';
import { Link } from '@inertiajs/react';

const Breadcrumbs = ({ product }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-4 font-semibold">
      <button onClick={() => window.history.back()} className="hover:underline">
        &lt;
      </button>
      <Link href="/catalog" className="hover:underline">Catalog</Link>
      <span>/</span>
      <span>{product.name}</span>
    </nav>
  );
};

export default Breadcrumbs;
