import React from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';

// Contoh data penjualan (bisa dari API atau state)
const salesData = [
  { id: 1, product_id: 1, phone_number: '08123456789', amount: 2, total_price: 300000, sale_time: '2023-09-15T10:30:00' },
  { id: 2, product_id: 2, phone_number: '08198765432', amount: 1, total_price: 75000, sale_time: '2023-09-16T11:00:00' },
];

const AddEditSales = ({ onSubmit }) => {
  const { id } = useParams(); // Ambil id dari URL
  const sale = salesData.find(s => s.id === parseInt(id)) || {}; // Cari data penjualan yang sesuai atau default kosong

  const salesFields = [
    { name: 'product_id', label: 'Product ID', type: 'number', required: true }, // Required field
    { name: 'phone_number', label: 'Nomor Telepon', type: 'text', required: true }, // Required field
    { name: 'amount', label: 'Jumlah', type: 'number', required: true }, // Required field
    { name: 'total_price', label: 'Total Harga', type: 'number', required: true }, // Required field
    { name: 'sale_time', label: 'Waktu Penjualan', type: 'datetime-local', required: true }, // Required field
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <DynamicForm fields={salesFields} onSubmit={onSubmit} initialData={sale} cancelLink="/admin/sales" />
    </div>
  );
};

export default AddEditSales;
