import React from 'react';
import DynamicTable from '../components/DynamicTable';

// Data dummy untuk tabel user
const userData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', email_verified_at: '2023-09-15', password: '********' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', email_verified_at: '2023-08-12', password: '********' },
];

const AdminAccount = () => {
  const columns = [
    { name: 'Nama Pengguna', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Email Tervalidasi', selector: row => row.email_verified_at, sortable: true },
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Pengguna</h1>
      <DynamicTable
        data={userData}
        addNewLink="/admin/accounts/add"
        editLink="/admin/accounts/edit"
        deleteLink="/admin/accounts/delete"
        columns={columns}
      />
    </div>
  );
};

export default AdminAccount;
