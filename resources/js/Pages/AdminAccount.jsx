import React from 'react';
import DynamicTable from '../components/DynamicTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { usePage } from '@inertiajs/react'; // To get Inertia props

const AdminAccount = () => {
    const { user, flash } = usePage().props; // Fetch account data from the backend

    const columns = [
        { name: 'Nama Pengguna', selector: row => row.name, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
    ];

    return (
        <AdminLayout>
            <div className="p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Pengguna</h1>
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
                    data={user} // Using the dynamic data from Inertia props
                    addNewLink="/admin/accounts/add"
                    editLink="/admin/accounts/edit"
                    columns={columns}
                    table="users"
                />
            </div>
        </AdminLayout>
    );
};

export default AdminAccount;
