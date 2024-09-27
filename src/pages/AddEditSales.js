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
    { name: 'product_id', label: 'Product ID', type: 'number' },
    { name: 'phone_number', label: 'Nomor Telepon', type: 'text' },
    { name: 'amount', label: 'Jumlah', type: 'number' },
    { name: 'total_price', label: 'Total Harga', type: 'number' },
    { name: 'sale_time', label: 'Waktu Penjualan', type: 'datetime-local' },
  ];

  return <DynamicForm fields={salesFields} onSubmit={onSubmit} initialData={sale} />;
};

export default AddEditSales;
