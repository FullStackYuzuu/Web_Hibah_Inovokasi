import React from 'react';
import { usePage } from '@inertiajs/react';
import DynamicForm from '../components/DynamicForm';

const AddEditProduct = () => {
    const { props } = usePage(); // Get data from server through Inertia.js
    const product = props.product || {}; // Product to be edited, if any

    const productFields = [
        { name: 'name', label: 'Nama Produk', type: 'text', required: true },
        { name: 'price', label: 'Harga Produk /Kg', type: 'number', required: true },
        { name: 'discount', label: 'Diskon (%)', type: 'number' },
        { name: 'category', label: 'Kategori', type: 'text' },
        { name: 'stock', label: 'Stok (Kg)', type: 'number' },
        { name: 'minOrder', label: 'Minimum Order (Kg)', type: 'number' },
        { name: 'description', label: 'Deskripsi Produk', type: 'textarea', required: true },
        { name: 'usage', label: 'Kegunaan Produk', type: 'textarea' },
        {
            name: 'images',
            label: 'Foto Produk',
            type: 'file',
            required: !product.id, // Required only if creating a new product
            multiple: true,
        },
    ];

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
