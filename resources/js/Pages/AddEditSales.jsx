import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';
import Select from 'react-select';
import { usePage } from '@inertiajs/react';

const AddEditSales = ({ onSubmit }) => {
    const { id } = useParams();
    const { salesData = [], products = [] } = usePage().props;

    const sale = salesData.find(s => s.id === parseInt(id)) || {};
    const [selectedProduct, setSelectedProduct] = useState(sale.product_id || null);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [amount, setAmount] = useState(sale.amount || 1);
    const [totalPrice, setTotalPrice] = useState(0);

    const productOptions = products.map(product => ({
        value: product.id,
        label: product.name,
        price: product.price,
        discount: product.discount
    }));

    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption?.value || null);
        const selectedPrice = selectedOption?.price || 0;
        const selectedDiscount = selectedOption?.discount || 0;

        setPrice(selectedPrice);
        setDiscount(selectedDiscount);

        calculateTotalPrice(selectedPrice, selectedDiscount, amount);
    };

    const handleAmountChange = (e) => {
        const newAmount = parseInt(e.target.value, 10) || 1;
        setAmount(newAmount);

        calculateTotalPrice(price, discount, newAmount);
    };

    const calculateTotalPrice = (price, discount, amount) => {
        const discountedPrice = price - (price * discount);
        const total = discountedPrice * amount;
        setTotalPrice(total);
    };

    const salesFields = [
        {
            name: 'product_id',
            label: 'Produk',
            type: 'custom',
            customInput: (
                <Select
                    options={productOptions}
                    value={productOptions.find(option => option.value === selectedProduct)}
                    onChange={handleProductChange}
                    isSearchable
                    placeholder="Pilih Produk"
                />
            ),
            required: true,
        },
        {
            name: 'amount',
            label: 'Jumlah',
            type: 'number',
            value: amount,
            onChange: handleAmountChange,
            required: true
        },
        {
            name: 'sale_time',
            label: 'Waktu Penjualan',
            type: 'datetime-local',
            required: true
        },
    ];

    const handleSubmit = (formData) => {
        formData.total_price = totalPrice; // Tambahkan total_price ke formData sebelum submit
        onSubmit(formData);
    };

    return (
        <div className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
            <DynamicForm
                fields={salesFields}
                submitUrl="/admin/sales/store"
                initialData={sale}
                cancelLink="/admin/sales"
            />
        </div>
    );
};

export default AddEditSales;
