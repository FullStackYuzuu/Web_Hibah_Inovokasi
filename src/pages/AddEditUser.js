import React from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';

// Contoh data pengguna (bisa dari API atau state)
const userData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: '********', google_id: 'john123' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: '********', google_id: 'jane123' },
];

const AddEditUser = ({ onSubmit }) => {
  const { id } = useParams(); // Ambil id dari URL
  const user = userData.find(u => u.id === parseInt(id)) || {}; // Cari pengguna yang sesuai atau default kosong

  const userFields = [
    { name: 'name', label: 'Nama Pengguna', type: 'text', required: true }, // Required field
    { name: 'email', label: 'Email', type: 'email', required: true }, // Required field
    { name: 'password', label: 'Password', type: 'password', required: true }, // Required field
    { name: 'google_id', label: 'Google ID', type: 'text' }, // Not required
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <DynamicForm fields={userFields} onSubmit={onSubmit} initialData={user} cancelLink="/admin/users" />
    </div>
  );
};

export default AddEditUser;
