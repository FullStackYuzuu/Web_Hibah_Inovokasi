import React from 'react';
import DynamicTable from '../components/DynamicTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { usePage } from '@inertiajs/react';

const AdminSales = () => {
    const { sales: serverSales = [], flash } = usePage().props;

    const columns = [
        { name: 'Jumlah', selector: row => row.amount, sortable: true },
        { name: 'Produk', selector: row => row.product?.name || 'Produk tidak tersedia', sortable: true }, // Mengakses nama produk
        { name: 'Total Harga', selector: row => `Rp. ${row.total_price.toLocaleString()}`, sortable: true },
        { name: 'Waktu Penjualan', selector: row => new Date(row.sale_time).toLocaleString(), sortable: true }, // Format tanggal
    ];

    return (
        <AdminLayout>
            <div className="p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Penjualan</h1>
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
                    data={serverSales}
                    addNewLink="/admin/sales/add"
                    editLink="/admin/sales/edit"
                    columns={columns}
                    table={"sales"}
                />
            </div>
        </AdminLayout>
    );
};

export default AdminSales;
