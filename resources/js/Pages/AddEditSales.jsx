import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/react';
import Select from 'react-select';

const AddEditSales = () => {
    const { id } = usePage().props; // ID diambil dari props yang diteruskan dari server
    const { salesData = [], products = [] } = usePage().props;

    console.log('Editing sale ID:', id); // Cek apakah ID muncul di konsol

    // Cari penjualan yang sedang di-edit, jika ada
    const sale = salesData.find(s => s.id === parseInt(id)) || {};

    // State form fields
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [amount, setAmount] = useState(1);
    const [saleTime, setSaleTime] = useState('');
    const [errors, setErrors] = useState({});

    const productOptions = products.map(product => ({
        value: product.id,
        label: product.name,
        price: product.price,
        discount: product.discount
    }));

    // Update state when `sale` changes
    useEffect(() => {
        if (sale.id) {
            setSelectedProduct(sale.product_id);
            setAmount(sale.amount);
            setSaleTime(sale.sale_time);
        }
    }, [sale]);

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption?.value || null);
    };

    const handleAmountChange = (e) => {
        const newAmount = parseInt(e.target.value, 10) || 1;
        setAmount(newAmount);
    };

    // Fungsi validasi untuk memastikan semua field yang required diisi
    const validateForm = () => {
        const newErrors = {};

        if (!selectedProduct) {
            newErrors.product_id = 'Produk harus dipilih';
        }

        if (!amount || amount <= 0) {
            newErrors.amount = 'Jumlah harus lebih dari 0';
        }

        if (!saleTime) {
            newErrors.sale_time = 'Waktu penjualan harus diisi';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Jika tidak ada error, kembalikan true
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('product_id', selectedProduct);
        formData.append('amount', amount);
        formData.append('sale_time', saleTime);

        if (sale.id) {
            formData.append('id', sale.id); // Pastikan ID penjualan dikirim jika sedang edit
        }

        // Gunakan axios atau fetch untuk post data
        axios.post('/admin/sales/store', formData)
            .then(response => {
                if (response.data.success) {
                    window.location.href = '/admin/sales'; // Redirect jika berhasil
                }
            })
            .catch(error => {
                if (error.response && error.response.data.error) {
                    window.alert(error.response.data.error); // Tampilkan alert jika ada error
                }
            });
    };


    return (
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12">
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-lg w-full">
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">Produk</label>
                    <Select
                        options={productOptions}
                        value={productOptions.find(option => option.value === selectedProduct)}
                        onChange={handleProductChange}
                        isSearchable
                        placeholder="Pilih Produk"
                    />
                    {errors.product_id && <p className="text-red-500 text-sm">{errors.product_id}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">Jumlah</label>
                    <input
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full p-2 border rounded"
                    />
                    {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">Waktu Penjualan</label>
                    <input
                        type="datetime-local"
                        name="sale_time"
                        value={saleTime}
                        onChange={(e) => setSaleTime(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.sale_time && <p className="text-red-500 text-sm">{errors.sale_time}</p>}
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
                    >
                        Submit
                    </button>
                    <Link href="/admin/sales">
                        <button
                            type="button"
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddEditSales;
