import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
                {products.map((product) => {
                    const price = parseFloat(product.price);
                    const discount = parseFloat(product.discount);

                    // Calculate the discounted price
                    const discountedPrice = discount 
                        ? price - (price * (discount / 100)) 
                        : price;

                    return (
                        <div
                            key={product.id}
                            className="w-full md:w-1/3 px-4 mb-8"
                        >
                            <Link 
                                to={`/product/${product.id}`} 
                                state={{ product }} 
                                className="block bg-gray-300 h-full"
                            >
                                <div className="relative pb-[100%] bg-gray-500 overflow-hidden">
                                    <img 
                                        src={product.images[0] || 'https://via.placeholder.com/500'} 
                                        alt={product.name} 
                                        className="absolute h-full w-full object-cover" 
                                    />
                                    {discount > 0 && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            {discount}% OFF
                                        </div>
                                    )}
                                </div>

                                {/* Ensure all cards have the same height */}
                                <div className="p-4 bg-gray-100 flex flex-col justify-between h-[150px]">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>

                                    {/* Keep price section within a flex container */}
                                    <div className="mt-2 flex flex-col">
                                        {/* Show original price if there is a discount */}
                                        {discount > 0 && (
                                            <p className="text-gray-600 line-through">
                                                Rp. {price.toLocaleString()}
                                            </p>
                                        )}

                                        {/* Show discounted or original price */}
                                        <p className={discount > 0 ? "text-red-500" : "text-gray-700"}>
                                            Rp. {discountedPrice.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductGrid;
