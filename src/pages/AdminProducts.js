// pages/AdminProducts.js
import React from 'react';
import DynamicTable from '../components/DynamicTable';

// Data dummy untuk tabel produk
const productData = [
  { id: 1, nama: 'Produk A', harga: 150000, foto: 'https://example.com/img1.jpg', deskripsi: 'Deskripsi A' },
  { id: 2, nama: 'Produk B', harga: 75000, foto: 'https://example.com/img2.jpg', deskripsi: 'Deskripsi B' },
  { id: 3, nama: 'Produk C', harga: 250000, foto: 'https://example.com/img3.jpg', deskripsi: 'Deskripsi C' },
];

const AdminProducts = () => {
  return (
    <div>
      <h1>Daftar Produk</h1>
      <DynamicTable
        data={productData}
        addNewLink="/admin/products/add"
        editLink="/admin/products/edit"
      />

    </div>
  );
};

export default AdminProducts;
