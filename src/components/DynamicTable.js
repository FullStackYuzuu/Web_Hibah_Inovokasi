import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Button from './Button';
import { Link } from 'react-router-dom';

const DynamicTable = ({ data, addNewLink, editLink }) => {
  const [searchText, setSearchText] = useState('');

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      console.log('Deleting item with id:', id);
    }
  };

  const columns = Object.keys(data[0]).map(key => {
    if (typeof data[0][key] === 'string' || typeof data[0][key] === 'number') {
      return {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        selector: row => row[key],
        sortable: true,
      };
    }
    if (key.toLowerCase().includes('foto') || key.toLowerCase().includes('image')) {
      return {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        cell: row => <img src={row[key]} alt={key} className="w-16 h-16 object-cover" />,
      };
    }
    return {
      name: key.charAt(0).toUpperCase() + key.slice(1),
      selector: row => row[key],
    };
  });

  columns.push({
    name: 'Aksi',
    cell: row => (
      <>
        <Link to={`${editLink}/${row.id}`} className="text-blue-500 mr-3">Edit</Link>
        <button onClick={() => handleDelete(row.id)} className="text-red-500">Hapus</button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  });

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Daftar Item</h2>
        <Button text="Add New" to={addNewLink} className="bg-orange-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105" />
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
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        className="overflow-x-auto"
      />
    </div>
  );
};

export default DynamicTable;
