import React from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';

// Contoh data produk (bisa dari API atau state)
const productData = [
    { id: 1, nama: 'Produk A', harga: 150000, foto: 'https://example.com/img1.jpg', deskripsi: 'Deskripsi A' },
    { id: 2, nama: 'Produk B', harga: 75000, foto: 'https://example.com/img2.jpg', deskripsi: 'Deskripsi B' },
    { id: 3, nama: 'Produk C', harga: 250000, foto: 'https://example.com/img3.jpg', deskripsi: 'Deskripsi C' },
  ];

const AddEditProduct = ({ onSubmit }) => {
    const { id } = useParams(); // Ambil id dari URL
    const product = productData.find(p => p.id === parseInt(id)) || {}; // Cari produk yang sesuai atau default kosong

    const productFields = [
        { name: 'nama', label: 'Nama Produk', type: 'text' },
        { name: 'harga', label: 'Harga Produk', type: 'number' },
        { name: 'foto', label: 'Foto Produk (URL)', type: 'text' },
        { name: 'deskripsi', label: 'Deskripsi Produk', type: 'textarea' },
        { name: 'kegunaan', label: 'Kegunaan', type: 'textarea' },
    ];

    return <DynamicForm fields={productFields} onSubmit={onSubmit} initialData={product} />;
};

export default AddEditProduct;
