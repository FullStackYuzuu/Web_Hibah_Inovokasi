import React, { useState } from 'react';

const FilterBox = () => {
    // State untuk slider harga dan ukuran
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500000);

    const handlePriceChange = (e, type) => {
        if (type === 'min') {
            setMinPrice(e.target.value);
        } else {
            setMaxPrice(e.target.value);
        }
    };

    return (
        <div className="bg-gray-100 p-6 w-64 rounded-lg h-[30.2rem]">
            {/* Pencarian */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Cari"
                    className="w-full p-2 border rounded focus:outline-none"
                />
            </div>

            {/* Filter Kategori */}
            <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Kategori</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li className="hover:text-black cursor-pointer">Semua Produk</li>
                    <li className="hover:text-black cursor-pointer">Produk Unggulan</li>
                    <li className="hover:text-black cursor-pointer">Diskon</li>
                </ul>
                {/* <p className="mt-2 text-xs text-gray-500 cursor-pointer">Lihat lainnya</p> */}
            </div>

            {/* Slider Harga */}
            <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Harga</h3>
                <input
                    type="range"
                    min="0"
                    max="500000"
                    value={minPrice}
                    onChange={(e) => handlePriceChange(e, 'min')}
                    className="w-full mb-2"
                />
                <input
                    type="range"
                    min="0"
                    max="500000"
                    value={maxPrice}
                    onChange={(e) => handlePriceChange(e, 'max')}
                    className="w-full"
                />
                <div className="flex flex-col justify-between mt-2">
                    <div className="flex flex-col">
                        <label className="text-xs">Harga Minimal</label>
                        <input
                            type="text"
                            value={`Rp ${minPrice}`}
                            className="text-gray-600 border p-1 rounded"
                            disabled
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs">Harga Maksimal</label>
                        <input
                            type="text"
                            value={`Rp ${maxPrice}`}
                            className="text-gray-600 border p-1 rounded"
                            disabled
                        />
                    </div>
                </div>
            </div>

            {/* Tombol Aplikasikan */}
            <div>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FilterBox;
