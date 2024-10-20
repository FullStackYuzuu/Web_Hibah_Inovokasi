import React from 'react';
import DynamicTable from '../components/DynamicTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { usePage } from '@inertiajs/react';

const AdminProducts = () => {
    // Ambil flash messages dari usePage().props
    const { products: serverProducts = [], flash } = usePage().props;

    const columns = [
        { name: 'Nama Produk', selector: row => row.name, sortable: true },
        { name: 'Harga', selector: row => `Rp. ${(row.price || 0).toLocaleString()}`, sortable: true },
        { name: 'Diskon', selector: row => `${(row.discount || 0).toLocaleString()} %`, sortable: true },
        { name: 'Harga Akhir', selector: row => `Rp. ${(row.price - (row.discount * 0.01) * row.price).toLocaleString()}`, sortable: true },
        { name: 'Deskripsi', selector: row => row.description, sortable: false },
        { name: 'Kegunaan', selector: row => row.usage, sortable: false },
        {
            name: 'Foto',
            cell: row => <img src={row.images[0]} alt={row.nama} className="w-12 h-12 object-cover rounded-md" />,
            ignoreRowClick: true,
        },
    ];

    return (
        <AdminLayout>
            <div className="p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Produk</h1>

                {/* Flash message for success */}
                {flash?.success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                        <strong className="font-bold">Sukses!</strong>
                        <span className="block sm:inline"> {flash.success}</span>
                    </div>
                )}
                {flash?.error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
                        <strong className="font-bold">Gagal!</strong>
                        <span className="block sm:inline"> {flash.error}</span>
                    </div>
                )}

                <DynamicTable
                    data={serverProducts} // Data dari server
                    addNewLink="/admin/products/add"
                    editLink="/admin/products/edit"
                    columns={columns} // Kolom yang didefinisikan
                    table="products" // Menambahkan parameter tabel 'products'
                />
            </div>
        </AdminLayout>
    );
};

export default AdminProducts;
