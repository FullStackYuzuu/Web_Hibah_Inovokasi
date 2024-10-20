import React, { useState } from 'react';

const FilterBox = ({ categories, onApplyFilter }) => {
    const [selectedCategory, setLocalCategory] = useState('');
    const [selectedMinPrice, setSelectedMinPrice] = useState('');
    const [selectedMaxPrice, setSelectedMaxPrice] = useState('');

    // Fungsi untuk submit dan terapkan filter setelah klik "Terapkan"
    const handleApplyFilter = () => {
        // Kirim data kategori dan harga yang dipilih ke parent (Catalog.js)
        onApplyFilter({
            category: selectedCategory,
            priceRange: {
                min: selectedMinPrice,
                max: selectedMaxPrice,
            }
        });
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Filter Produk</h2>

            {/* Filter berdasarkan kategori */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Kategori</label>
                <select
                    className="w-full p-2 border rounded"
                    value={selectedCategory}
                    onChange={(e) => setLocalCategory(e.target.value)}
                >
                    <option value="">Semua Kategori</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filter berdasarkan harga */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Harga</label>
                <div className="flex space-x-2">
                    <input
                        type="number"
                        placeholder="Min"
                        value={selectedMinPrice}
                        onChange={(e) => setSelectedMinPrice(e.target.value)}
                        className="w-1/2 p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={selectedMaxPrice}
                        onChange={(e) => setSelectedMaxPrice(e.target.value)}
                        className="w-1/2 p-2 border rounded"
                    />
                </div>
            </div>

            {/* Tombol untuk submit filter */}
            <button
                onClick={handleApplyFilter}
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600"
            >
                Terapkan Filter
            </button>
        </div>
    );
};

export default FilterBox;
