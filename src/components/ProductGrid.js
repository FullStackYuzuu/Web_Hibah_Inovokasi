import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
    return (
        <div className="container mx-auto px-4 text-white">
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
                            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <Link 
                                to={`/product/${product.id}`} 
                                state={{ product }} 
                                className="block bg-gray-300 h-full"
                            >
                                <div className="relative pb-[100%] bg-gray-500 overflow-hidden">
                                    {/* Check if product.images exists and has at least one image */}
                                    <img 
                                        src={(product.images && product.images.length > 0) ? product.images[0] : 'https://via.placeholder.com/500'} 
                                        alt={product.name} 
                                        className="absolute h-full w-full object-cover transition-transform duration-200"
                                    />
                                    {discount > 0 && (
                                        <div className="absolute top-2 right-2 bg-white text-orange-500 text-md px-4 py-4 rounded-full font-black">
                                            {discount}%
                                        </div>
                                    )}
                                </div>

                                {/* Ensure all cards have the same height */}
                                <div className="p-4 bg-orange-500 flex flex-col justify-between h-[150px]">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>

                                    {/* Price section within a flex container */}
                                    <div className="mt-2 flex flex-col">
                                        {discount > 0 && (
                                            <p className="text-gray-600 line-through">
                                                Rp. {price.toLocaleString()}
                                            </p>
                                        )}
                                        <p className={discount > 0 ? "text-white font-black text-[2rem]" : "text-white font-black"}>
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
