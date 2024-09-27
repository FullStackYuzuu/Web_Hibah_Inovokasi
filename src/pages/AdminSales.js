// pages/AdminSales.js
import React from 'react';
import DynamicTable from '../components/DynamicTable';

// Data dummy untuk tabel sales
const salesData = [
  { id: 1, product_id: 1, phone_number: '08123456789', amount: 2, total_price: 300000, sale_time: '2023-09-15 10:30:00' },
  { id: 2, product_id: 2, phone_number: '08198765432', amount: 1, total_price: 75000, sale_time: '2023-09-16 11:00:00' },
];

const AdminSales = () => {
  return (
    <div>
      <h1>Daftar Penjualan</h1>
      <DynamicTable
        data={salesData}
        addNewLink="/admin/sales/add"
        editLink="/admin/sales/edit"
        deleteLink="/admin/sales/delete"
      />
    </div>
  );
};

export default AdminSales;
