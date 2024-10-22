import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import AdminLayout from '@/Layouts/AdminLayout';

const AdminSettings = ({ settings }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(settings);

    // Handle filtering based on search text
    useEffect(() => {
        setFilteredData(
            settings.filter((item) =>
                item.key.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText, settings]);

    // Handle the editable column
    const handleValueChange = (e, id) => {
        const value = e.target.value;
        const updatedSettings = filteredData.map((item) =>
            item.id === id ? { ...item, value: value === "" ? "" : value } : item
        );
        setFilteredData(updatedSettings);
    };

    // Save changes (optional)
    const handleSave = (id, value) => {
        Inertia.put(`/admin/settings/${id}`, { value: value === "" ? null : value });
    };


    const columns = [
        {
            name: 'Key',
            selector: (row) => row.key,
            sortable: true,
        },
        {
            name: 'Value',
            cell: (row) => (
                <input
                    type="text"
                    value={row.value || ''}
                    placeholder="Enter value..."
                    className="p-2 border rounded w-full"
                    onChange={(e) => handleValueChange(e, row.id)}
                    onBlur={() => handleSave(row.id, row.value)} // Save on blur
                />
            ),
            sortable: true,
        }
    ];

    return (
        <AdminLayout>
            <div className="container mx-auto p-4">
                <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-0">Daftar Settings</h2>
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
                Kosongkan Jika Tidak Ada!

                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    highlightOnHover
                    className="overflow-x-auto"
                />
            </div>
        </AdminLayout>
    );
};

export default AdminSettings;
