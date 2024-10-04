import React from 'react';
import DynamicTable from '../components/DynamicTable';

// Data dummy untuk tabel sales
const salesData = [
  { id: 1, product_id: 1, phone_number: '08123456789', amount: 2, total_price: 300000, sale_time: '2023-09-15 10:30:00' },
  { id: 2, product_id: 2, phone_number: '08198765432', amount: 1, total_price: 75000, sale_time: '2023-09-16 11:00:00' },
];

const AdminSales = () => {
  const columns = [
    { name: 'Nomor Telepon', selector: row => row.phone_number, sortable: true },
    { name: 'Jumlah', selector: row => row.amount, sortable: true },
    { name: 'Total Harga', selector: row => `Rp. ${row.total_price.toLocaleString()}`, sortable: true },
    { name: 'Waktu Penjualan', selector: row => row.sale_time, sortable: true },
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Penjualan</h1>
      <DynamicTable
        data={salesData}
        addNewLink="/admin/sales/add"
        editLink="/admin/sales/edit"
        deleteLink="/admin/sales/delete"
        columns={columns}
      />
    </div>
  );
};

export default AdminSales;
