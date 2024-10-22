import React, { useState } from 'react';
import Button from './Button';

const ProductContent = ({ product }) => {
    const price = Math.round(parseFloat(product.price)); // Harga asli (dibulatkan ke int)
    const discount = parseFloat(product.discount);
    const minOrder = parseInt(product.minOrder);
    const stock = parseInt(product.stock);

    // Menghitung harga diskon
    const discountedPrice = discount
        ? Math.round(price - (price * (discount / 100))) // Hasil pembulatan harga diskon
        : price;

    // State untuk jumlah pembelian
    const [quantity, setQuantity] = useState(minOrder);

    // Menghitung total harga berdasarkan jumlah pembelian dan harga diskon
    const totalPrice = discountedPrice * quantity;

    // Menghitung total yang dihemat
    const totalSavings = discount ? Math.round((price - discountedPrice) * quantity) : 0;

    // Fungsi untuk mengubah nilai quantity saat input berubah
    const handleQuantityChange = (e) => {
        const value = Math.max(minOrder, Math.min(stock, parseInt(e.target.value))); // Pastikan input tidak kurang dari minOrder dan tidak lebih dari stok
        setQuantity(value);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative pb-[100%] mb-4 bg-gray-300">
                {product.image_path ? (
                    <img
                        src={`/storage/${product.image_path}`}
                        alt={product.name}
                        className="absolute h-full w-full object-cover transition-transform duration-200"
                    />
                ) : (
                    <span className="absolute h-full w-full flex items-center justify-center bg-gray-200 text-gray-600">
                        No Photo
                    </span>
                )}
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                {discount > 0 && (
                    <p className="line-through">Rp. {price.toLocaleString()}</p>
                )}
                <p className={discount > 0 ? "text-[2rem] mb-2 font-black" : "text-xl font-black mb-2"}>
                    Rp. {discountedPrice.toLocaleString()} /Kg
                </p>

                <p className="mb-2">Stok: {product.stock} Kg</p>
                <p className="mb-4">Minimal Pembelian: {product.minOrder} Kg</p>

                <div className="flex flex-col sm:flex-row items-center mb-6">
                    <Button
                        className="bg-white flex items-center px-[7rem] py-[0.5rem] rounded-[0.7rem] text-orange-500 font-bold hover:cursor-pointer hover:text-white hover:bg-orange-300"
                        text={"Beli"}
                        imageSrc={'/page/WhatsappLogo.svg'}
                        to={`/product/${product.id}/buy/${quantity}`}
                    />

                    <div className="flex items-center ml-0 sm:ml-5 border border-gray-300 rounded-lg text-orange-500 mt-4 sm:mt-0">
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min={product.minOrder}
                            max={product.stock}
                            className="w-16 h-[3rem] text-center bg-gray-100 p-2 border-r border-gray-300"
                        />
                        <span className="p-2 text-white">Kg</span>
                    </div>
                </div>

                {/* Total Harga */}
                <p className="text-lg font-semibold mb-2">
                    Total Harga: Rp. {totalPrice.toLocaleString()}
                </p>

                {/* Total yang Dihemat */}
                {discount > 0 && (
                    <p className="text-white font-extrabold mb-4">
                        Anda menghemat: Rp. {totalSavings.toLocaleString()}
                    </p>
                )}

                <h2 className="text-2xl font-semibold mb-2">Deskripsi:</h2>
                <p className="mb-6">{product.description}</p>

                <h2 className="text-2xl font-semibold mb-2">Kegunaan:</h2>
                <p>{product.usage}</p>
            </div>
        </div >
    );
};

export default ProductContent;
