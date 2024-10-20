import React from 'react';
import { usePage } from '@inertiajs/react';
import DynamicForm from '../components/DynamicForm';

const AddEditProduct = () => {
    const { props } = usePage(); // Mengambil data dari server melalui Inertia.js
    const product = props.product || {}; // Produk yang akan diedit, jika ada

    const productFields = [
        { name: 'name', label: 'Nama Produk', type: 'text', required: true },
        { name: 'price', label: 'Harga Produk', type: 'number', required: true },
        { name: 'discount', label: 'Diskon (%)', type: 'number' },
        { name: 'category', label: 'Kategori', type: 'text' },
        { name: 'stock', label: 'Stok', type: 'number' },
        { name: 'minOrder', label: 'Minimum Order', type: 'text' },
        { name: 'description', label: 'Deskripsi Produk', type: 'textarea', required: true },
        { name: 'usage', label: 'Kegunaan Produk', type: 'textarea' },
        { name: 'images', label: 'Foto Produk', type: 'file', required: true, multiple: true },
    ];

    // Ganti submitUrl sesuai rute penyimpanan produk
    return (
        <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
            <DynamicForm
                fields={productFields}
                submitUrl="/admin/products/store"
                initialData={product}
                cancelLink="/admin/products"
            />
        </div>
    );
};

export default AddEditProduct;
