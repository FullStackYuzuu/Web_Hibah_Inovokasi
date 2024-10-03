import React from 'react';
import DynamicTable from '../components/DynamicTable';

// Data dummy untuk tabel produk
const productData = [
  {
    id: 1,
    nama: 'Lorem ipsum1',
    harga: 150000,
    deskripsi: 'Deskripsi produk 1',
    images: ['/product/p1.jpeg', '/product/p2.jpg'],
  },
  {
    id: 2,
    nama: 'Lorem ipsum2',
    harga: 100000,
    deskripsi: 'Deskripsi produk 2',
    images: ['/product/p4.jpg', '/product/p2.jpg'],
  },
  {
    id: 3,
    nama: 'Lorem ipsum3',
    harga: 250000,
    deskripsi: 'Deskripsi produk 3',
    images: ['/product/p3.jpeg', '/product/p4.jpg'],
  },
];

const AdminProducts = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Produk</h1>
      <DynamicTable
        data={productData}
        addNewLink="/admin/products/add"
        editLink="/admin/products/edit"
      />
    </div>
  );
};

export default AdminProducts;
