import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterBox from '../components/FilterBox';
import Modal from '../components/Modal';

const Catalog = () => {
    const products = [
        {
            id: 1,
            name: 'Product A',
            price: 150000,
            discount: 50,
            description: 'This is the description for Product A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur massa ut magna interdum lobortis.',
            usage: 'Usage instructions for Product A. Vivamus efficitur massa ut magna interdum lobortis.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg',
                '/product/p4.jpg'
            ],
            stock: '1000 Kg',
            minOrder: '10 Kg',
            category: 'Kategori 1'
        },
        {
            id: 2,
            name: 'Product B',
            price: 100000,
            discount: 20,
            description: 'This is the description for Product B. Vivamus efficitur massa ut magna interdum lobortis. Etiam tempor dui a mi blandit pharetra.',
            usage: 'Usage instructions for Product B. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '500 Kg',
            minOrder: '5 Kg',
            category: 'Kategori 1'
        },
        {
            id: 3,
            name: 'Product C',
            price: 200000,
            discount: 30,
            description: 'This is the description for Product C. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed.',
            usage: 'Usage instructions for Product C. Cras tincidunt neque vitae metus rutrum.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '800 Kg',
            minOrder: '15 Kg',
            category: 'Kategori 2'
        },
        {
            id: 4,
            name: 'Product D',
            price: 175000,
            discount: 10,
            description: 'This is the description for Product D. Etiam tempor dui a mi blandit pharetra. Nam mattis ex at ex ultricies mattis.',
            usage: 'Usage instructions for Product D. Donec nec ipsum et nulla pellentesque sollicitudin.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '600 Kg',
            minOrder: '12 Kg',
            category: 'Kategori 2'
        },
        {
            id: 5,
            name: 'Product E',
            price: 120000,
            discount: 15,
            description: 'This is the description for Product E. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar.',
            usage: 'Usage instructions for Product E. Quisque suscipit massa libero, ut blandit lorem aliquam a.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '900 Kg',
            minOrder: '20 Kg',
            category: 'Kategori 1'
        },
        {
            id: 6,
            name: 'Product F',
            price: 300000,
            discount: 25,
            description: 'This is the description for Product F. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed.',
            usage: 'Usage instructions for Product F. Nam ex turpis, accumsan vel sodales a.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '750 Kg',
            minOrder: '8 Kg',
            category: 'Kategori 3'
        },
        {
            id: 7,
            name: 'Product G',
            price: 140000,
            discount: 5,
            description: 'This is the description for Product G. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla.',
            usage: 'Usage instructions for Product G. Vivamus efficitur massa ut magna interdum lobortis.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '1000 Kg',
            minOrder: '7 Kg',
            category: 'Kategori 3'
        },
        {
            id: 8,
            name: 'Product H',
            price: 220000,
            discount: 35,
            description: 'This is the description for Product H. Mauris quis consequat nunc, et commodo erat.',
            usage: 'Usage instructions for Product H. Quisque suscipit massa libero, ut blandit lorem aliquam a.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '500 Kg',
            minOrder: '6 Kg',
            category: 'Kategori 1'
        },
        {
            id: 9,
            name: 'Product I',
            price: 90000,
            discount: 40,
            description: 'This is the description for Product I. Donec nec ipsum et nulla pellentesque sollicitudin.',
            usage: 'Usage instructions for Product I. Nunc nibh risus, commodo a mattis et.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '700 Kg',
            minOrder: '9 Kg',
            category: 'Kategori 2'
        },
        {
            id: 1,
            name: 'Product A',
            price: 150000,
            discount: 50,
            description: 'This is the description for Product A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur massa ut magna interdum lobortis.',
            usage: 'Usage instructions for Product A. Vivamus efficitur massa ut magna interdum lobortis.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg',
                '/product/p4.jpg'
            ],
            stock: '1000 Kg',
            minOrder: '10 Kg',
            category: 'Kategori 1'
        },
        {
            id: 2,
            name: 'Product B',
            price: 100000,
            discount: 20,
            description: 'This is the description for Product B. Vivamus efficitur massa ut magna interdum lobortis. Etiam tempor dui a mi blandit pharetra.',
            usage: 'Usage instructions for Product B. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '500 Kg',
            minOrder: '5 Kg',
            category: 'Kategori 1'
        },
        {
            id: 3,
            name: 'Product C',
            price: 200000,
            discount: 30,
            description: 'This is the description for Product C. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed.',
            usage: 'Usage instructions for Product C. Cras tincidunt neque vitae metus rutrum.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '800 Kg',
            minOrder: '15 Kg',
            category: 'Kategori 2'
        },
        {
            id: 4,
            name: 'Product D',
            price: 175000,
            discount: 10,
            description: 'This is the description for Product D. Etiam tempor dui a mi blandit pharetra. Nam mattis ex at ex ultricies mattis.',
            usage: 'Usage instructions for Product D. Donec nec ipsum et nulla pellentesque sollicitudin.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '600 Kg',
            minOrder: '12 Kg',
            category: 'Kategori 2'
        },
        {
            id: 5,
            name: 'Product E',
            price: 120000,
            discount: 15,
            description: 'This is the description for Product E. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar.',
            usage: 'Usage instructions for Product E. Quisque suscipit massa libero, ut blandit lorem aliquam a.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '900 Kg',
            minOrder: '20 Kg',
            category: 'Kategori 1'
        },
        {
            id: 6,
            name: 'Product F',
            price: 300000,
            discount: 25,
            description: 'This is the description for Product F. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed.',
            usage: 'Usage instructions for Product F. Nam ex turpis, accumsan vel sodales a.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '750 Kg',
            minOrder: '8 Kg',
            category: 'Kategori 3'
        },
        {
            id: 7,
            name: 'Product G',
            price: 140000,
            discount: 5,
            description: 'This is the description for Product G. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla.',
            usage: 'Usage instructions for Product G. Vivamus efficitur massa ut magna interdum lobortis.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '1000 Kg',
            minOrder: '7 Kg',
            category: 'Kategori 3'
        },
        {
            id: 8,
            name: 'Product H',
            price: 220000,
            discount: 35,
            description: 'This is the description for Product H. Mauris quis consequat nunc, et commodo erat.',
            usage: 'Usage instructions for Product H. Quisque suscipit massa libero, ut blandit lorem aliquam a.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '500 Kg',
            minOrder: '6 Kg',
            category: 'Kategori 1'
        },
        {
            id: 9,
            name: 'Product I',
            price: 90000,
            discount: 40,
            description: 'This is the description for Product I. Donec nec ipsum et nulla pellentesque sollicitudin.',
            usage: 'Usage instructions for Product I. Nunc nibh risus, commodo a mattis et.',
            images: [
                '/product/p1.jpeg',
                '/product/p2.jpg',
                '/product/p3.jpeg'
            ],
            stock: '700 Kg',
            minOrder: '9 Kg',
            category: 'Kategori 2'
        }
    ];


    // State untuk pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Jumlah produk per halaman

    // Fungsi untuk mengubah halaman
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // State untuk kategori dan harga filter
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [appliedFilter, setAppliedFilter] = useState({ category: '', priceRange: { min: '', max: '' } });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = [...new Set(products.map(product => product.category))];

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const applyFilter = () => {
        setAppliedFilter({
            category: selectedCategory,
            priceRange: priceRange,
        });
    };

    const calculateDiscountedPrice = (product) => {
        return product.discount > 0 ? product.price - (product.price * (product.discount / 100)) : product.price;
    };

    const filteredProducts = products.filter(product => {
        const discountedPrice = calculateDiscountedPrice(product);
        const withinCategory = appliedFilter.category ? product.category === appliedFilter.category : true;
        const withinPriceRange = (appliedFilter.priceRange.min === '' || discountedPrice >= appliedFilter.priceRange.min) &&
            (appliedFilter.priceRange.max === '' || discountedPrice <= appliedFilter.priceRange.max);
        return withinCategory && withinPriceRange;
    });

    return (
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
                        setSelectedCategory={setSelectedCategory}
                        setPriceRange={setPriceRange}
                        applyFilter={applyFilter}
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
                        setSelectedCategory={setSelectedCategory}
                        setPriceRange={setPriceRange}
                        applyFilter={applyFilter}
                    />
                </Modal>
            )}
        </section>
    );
};

export default Catalog;
