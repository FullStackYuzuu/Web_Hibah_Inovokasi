import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterBox from '../components/FilterBox';
import Modal from '../components/Modal';

const Catalog = () => {
    // Contoh data produk
    const products = [
        {
            id: 1, name: 'Lorem ipsum1', price: 150000,
            discount: 50, // dalam persen        
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p1.jpeg', // Gambar pertama
                '/product/p2.jpg', // Gambar kedua
                '/product/p3.jpeg', // Gambar ketiga
                '/product/p4.jpg'  // Gambar keempat
            ],
            stock: 1000 + " Kg",
            minOrder: 10 + " Kg",
            category: "Kategori 1"
        },
        {
            id: 2, name: 'Lorem ipsum2', price: 100000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p4.jpg', // Gambar pertama
                '/product/p2.jpg', // Gambar kedua
                '/product/p3.jpeg', // Gambar ketiga
            ],
            stock: 1000 + " Kg",
            minOrder: 10 + " Kg",
            category: "Kategori 1"
        },
        {
            id: 3, name: 'Lorem ipsum2', price: 100000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p4.jpg', // Gambar pertama
                '/product/p2.jpg', // Gambar kedua
                '/product/p3.jpeg', // Gambar ketiga
            ],
            stock: 1000 + " Kg",
            minOrder: 10 + " Kg",   
            category: "Kategori 2"
        },
    ];

    // State untuk kategori dan harga filter
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [appliedFilter, setAppliedFilter] = useState({ category: '', priceRange: { min: '', max: '' } });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Mengambil kategori unik dari produk
    const categories = [...new Set(products.map(product => product.category))];

    // Fungsi untuk toggle filter modal di mobile
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // Fungsi untuk menerapkan filter setelah klik "Terapkan"
    const applyFilter = () => {
        setAppliedFilter({
            category: selectedCategory,
            priceRange: priceRange,
        });
    };

    // Fungsi untuk menghitung harga diskon (jika ada)
    const calculateDiscountedPrice = (product) => {
        return product.discount > 0 ? product.price - (product.price * (product.discount / 100)) : product.price;
    };

    // Fungsi untuk memfilter produk berdasarkan kategori dan harga (termasuk diskon)
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

            {/* Button for filters on mobile */}
            <div className="block md:hidden text-center mb-8">
                <button
                    onClick={toggleFilter}
                    className="bg-orange-500 text-white py-2 px-4 rounded-lg font-bold"
                >
                    Tampilkan Filter
                </button>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Show FilterBox directly on larger screens */}
                <div className="hidden md:block md:w-1/4">
                    <FilterBox
                        categories={categories}
                        setSelectedCategory={setSelectedCategory}
                        setPriceRange={setPriceRange}
                        applyFilter={applyFilter} // Mengirim fungsi untuk diterapkan
                    />
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4">
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>

            {/* Modal for mobile filters */}
            {isFilterOpen && (
                <Modal onClose={toggleFilter}>
                    <FilterBox
                        categories={categories}
                        setSelectedCategory={setSelectedCategory}
                        setPriceRange={setPriceRange}
                        applyFilter={applyFilter} // Mengirim fungsi untuk diterapkan
                    />
                </Modal>
            )}
        </section>
    );
};

export default Catalog;
