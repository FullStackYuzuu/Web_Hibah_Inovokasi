import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductImages from '../components/ProductImages';
import ProductContent from '../components/ProductContent';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <Breadcrumbs product={product} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Komponen gambar produk */}
        <ProductImages images={product.images} />

        {/* Komponen detail produk */}
        <ProductContent product={product} />
      </div>
    </section>
  );
};

export default ProductDetail;
