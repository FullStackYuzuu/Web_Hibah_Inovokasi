import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Button from './Button';
import { Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const DynamicTable = ({ data, addNewLink, editLink, columns, table }) => {
    const [searchText, setSearchText] = useState('');
    const { url } = usePage();

    if (!data || data.length === 0) {
        return <p className="text-center">No data available.</p>;
    }

    const handleDelete = (table, id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
            Inertia.delete(`/delete-item/${table}/${id}`, {
                preserveScroll: true,
                preserveState: false,
                onSuccess: (page) => {
                    if (page.props.flash?.success) {
                        alert(page.props.flash.success); // Tampilkan flash message sukses
                    }
                },
                onError: (errors) => {
                    console.log(errors);
                    alert('Gagal menghapus item');
                }
            });
        }
    };

    const actionColumn = {
        name: 'Aksi',
        cell: row => (
            <div className="flex space-x-2">
                <Link href={`${editLink}/${row.id}`} className="text-blue-500 hover:underline">Edit</Link> {/* Mengarahkan ke halaman edit */}
                <button onClick={() => handleDelete(table, row.id)} className="text-red-500 hover:underline">Hapus</button>
            </div>
        ),
    };


    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            String(val).toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-0">Daftar Item</h2>
                <Link href={addNewLink} className="bg-orange-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                    Add New
                </Link>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Cari..."
                    className="p-2 border rounded w-full"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <DataTable
                columns={[...columns, actionColumn]} // Merge dynamic columns with the action column
                data={filteredData}
                pagination
                highlightOnHover
                className="overflow-x-auto"
            />
        </div>
    );
};

export default DynamicTable;
