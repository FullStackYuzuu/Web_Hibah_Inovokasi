import React from 'react';
import { usePage } from '@inertiajs/react';
import DynamicForm from '../components/DynamicForm';

const AddEditUser = () => {
    const { props } = usePage(); // Fetching data from the backend through Inertia.js
    const user = props.user || {}; // User that will be edited, if available

    const userFields = [
        { name: 'name', label: 'Nama Pengguna', type: 'text', required: true }, // Required field
        { name: 'email', label: 'Email', type: 'email', required: true }, // Required field
    ];

    return (
        <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
            <DynamicForm
                fields={userFields}
                submitUrl="/admin/accounts/store"
                initialData={user}
                cancelLink="/admin/accounts"
            />
        </div>
    );
};

export default AddEditUser;
