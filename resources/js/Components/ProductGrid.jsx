import React from 'react';
import { Link } from '@inertiajs/react';

const ProductGrid = ({ products = [], currentPage, itemsPerPage, onPageChange, showPagination = true }) => {
    // Log data produk yang diterima
    console.log('Products received:', products);

    // Hitung produk yang ditampilkan berdasarkan pagination (jika ada)
    const paginatedProducts = showPagination
        ? products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : products;

    // Cek jika tidak ada produk yang ditampilkan
    if (!products || products.length === 0) {
        return <p className="text-center text-white">No products available</p>;
    }

    return (
        <div className="container mx-auto px-4 text-white">
            <div className="flex flex-wrap -mx-4">
                {paginatedProducts.map((product) => {
                    const price = parseFloat(product.price);
                    const discount = product.discount ? parseFloat(product.discount) : 0;
                    const discountedPrice = discount > 0
                        ? price - (price * (discount / 100))
                        : price;

                    return (
                        <div
                            key={product.id}
                            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <Link
                                href={`/product/${product.id}`} // Inertia.js navigation
                                className="block bg-gray-300 h-full"
                            >
                                <div className="relative pb-[100%] bg-gray-500 overflow-hidden">
                                    <img
                                        src={(product.images && product.images.length > 0) ? product.images[0] : 'https://via.placeholder.com/500'}
                                        alt={product.name}
                                        className="absolute h-full w-full object-cover transition-transform duration-200"
                                    />
                                    {discount > 0 && (
                                        <div className="absolute top-2 right-2 bg-white text-orange-500 text-md px-4 py-4 rounded-full font-black">
                                            {discount}% OFF
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 bg-orange-500 flex flex-col justify-between h-[150px]">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <div className="mt-2 flex flex-col">
                                        {discount > 0 && (
                                            <p className="text-gray-600 line-through">
                                                Rp. {price.toLocaleString()}
                                            </p>
                                        )}
                                        <p className="text-white font-black text-[2rem]">
                                            Rp. {discountedPrice.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>

            {showPagination && products.length > itemsPerPage && (
                <div className="flex justify-center space-x-2 mt-6">
                    {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => onPageChange(index + 1)}
                            className={`px-4 py-2 rounded-full ${currentPage === index + 1
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-300 text-gray-600'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
