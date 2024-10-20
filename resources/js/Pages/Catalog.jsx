import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import ProductGrid from '../components/ProductGrid';
import FilterBox from '../components/FilterBox';
import Modal from '../components/Modal';
import UserLayout from '@/Layouts/UserLayout';

export default function Catalog() {
    const { products: serverProducts = [] } = usePage().props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // State untuk kategori dan harga filter
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [appliedFilter, setAppliedFilter] = useState({ category: '', priceRange: { min: '', max: '' } });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = serverProducts.length > 0
        ? [...new Set(serverProducts.map(product => product.category))]
        : [];

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const applyFilter = (filter) => {
        // Update state kategori dan harga berdasarkan data dari FilterBox
        setSelectedCategory(filter.category);
        setPriceRange(filter.priceRange);
        setAppliedFilter(filter);
    };

    const calculateDiscountedPrice = (product) => {
        return product.discount > 0 ? product.price - (product.price * (product.discount / 100)) : product.price;
    };

    const filteredProducts = serverProducts.filter(product => {
        const discountedPrice = calculateDiscountedPrice(product);
        const withinCategory = appliedFilter.category ? product.category === appliedFilter.category : true;
        const withinPriceRange = (appliedFilter.priceRange.min === '' || discountedPrice >= appliedFilter.priceRange.min) &&
            (appliedFilter.priceRange.max === '' || discountedPrice <= appliedFilter.priceRange.max);
        return withinCategory && withinPriceRange;
    });

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <UserLayout>
            <section className="px-4 py-16 bg-orange-200 text-orange-500">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Katalog Kami</h1>
                <p className="mb-8 text-center">Jelajahi katalog produk kami!</p>

                <div className="block md:hidden text-center mb-8">
                    <button
                        onClick={toggleFilter}
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg font-bold"
                    >
                        Tampilkan Filter
                    </button>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="hidden md:block md:w-1/4">
                        <FilterBox
                            categories={categories}
                            onApplyFilter={applyFilter}
                        />
                    </div>

                    <div className="w-full md:w-3/4">
                        <ProductGrid
                            products={filteredProducts}
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>

                {isFilterOpen && (
                    <Modal onClose={toggleFilter}>
                        <FilterBox
                            categories={categories}
                            onApplyFilter={applyFilter}
                        />
                    </Modal>
                )}
            </section>
        </UserLayout>
    );
}
