// pages/AdminAccount.js
import React from 'react';
import DynamicTable from '../components/DynamicTable';

// Data dummy untuk tabel user
const userData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', email_verified_at: '2023-09-15', password: '********' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', email_verified_at: '2023-08-12', password: '********' },
];

const AdminAccount = () => {
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <DynamicTable
        data={userData}
        addNewLink="/admin/accounts/add"
        editLink="/admin/accounts/edit"
        deleteLink="/admin/accounts/delete"
      />
    </div>
  );
};

export default AdminAccount;
