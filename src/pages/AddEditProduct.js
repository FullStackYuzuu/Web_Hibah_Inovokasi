import React from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';

// Data produk (bisa didapat dari API atau state)
const products = [
  {
    id: 1,
    name: 'Lorem ipsum1',
    price: 150000,
    discount: 50,
    description: 'Lorem ipsum dolor sit amet...',
    usage: 'Lorem ipsum dolor sit amet...',
    images: ['/product/p1.jpeg', '/product/p2.jpg'],
    stock: '1000 Kg',
    minOrder: '10 Kg',
    category: 'Kategori 1',
  },
  {
    id: 2,
    name: 'Lorem ipsum2',
    price: 100000,
    description: 'Lorem ipsum dolor sit amet...',
    usage: 'Lorem ipsum dolor sit amet...',
    images: ['/product/p4.jpg', '/product/p2.jpg'],
    stock: '1000 Kg',
    minOrder: '10 Kg',
    category: 'Kategori 1',
  },
  {
    id: 3,
    name: 'Lorem ipsum3',
    price: 100000,
    description: 'Lorem ipsum dolor sit amet...',
    usage: 'Lorem ipsum dolor sit amet...',
    images: ['/product/p4.jpg', '/product/p2.jpg'],
    stock: '1000 Kg',
    minOrder: '10 Kg',
    category: 'Kategori 2',
  },
];

const AddEditProduct = ({ onSubmit }) => {
  const { id } = useParams(); // Ambil id dari URL
  const product = products.find(p => p.id === parseInt(id)) || {}; // Cari produk yang sesuai atau default kosong

  const productFields = [
    { name: 'name', label: 'Nama Produk', type: 'text', required: true },
    { name: 'price', label: 'Harga Produk', type: 'number', required: true },
    { name: 'discount', label: 'Diskon (%)', type: 'number' }, // Diskon sebagai persentase
    { name: 'category', label: 'Kategori', type: 'text' },
    { name: 'stock', label: 'Stok', type: 'text' },
    { name: 'minOrder', label: 'Minimum Order', type: 'text' },
    { name: 'description', label: 'Deskripsi Produk', type: 'textarea', required: true },
    { name: 'usage', label: 'Kegunaan Produk', type: 'textarea' },
    { name: 'images', label: 'Foto Produk', type: 'file', required: true, multiple: true }, // Handle multiple images
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <DynamicForm fields={productFields} onSubmit={onSubmit} initialData={product} cancelLink="/admin/products" />
    </div>
  );
};

export default AddEditProduct;
