import React from 'react';

const ProductContent = ({ product }) => {
  const price = parseFloat(product.price);
  const discount = parseFloat(product.discount);

  // Menghitung harga diskon
  const discountedPrice = discount 
    ? price - (price * (discount / 100)) 
    : price;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {/* Hanya tampilkan harga dicoret jika ada diskon */}
      {discount > 0 && (
        <p className="text-gray-600 line-through">Rp. {price.toLocaleString()}</p>
      )}

      {/* Harga diskon jika ada diskon, harga asli jika tidak */}
      <p className={discount > 0 ? "text-xl font-semibold text-red-500 mb-2" : "text-xl font-semibold text-gray-700 mb-2"}>
        Rp. {discountedPrice.toLocaleString()}
      </p>

      <p className="text-gray-600 mb-2">Stok: {product.stock}</p>
      <p className="text-gray-600 mb-4">Minimal Pembelian: {product.minOrder}</p>

      {/* Tombol WhatsApp & Jumlah */}
      <div className="flex items-center mb-6">
        <button className="bg-green-500 text-white flex items-center px-4 py-2 rounded-lg">
          <span className="mr-2">WhatsApp</span>
        </button>
        <div className="flex items-center ml-4 border border-gray-300 rounded-lg">
          <input
            type="number"
            defaultValue={10}
            min={10}
            className="w-16 text-center bg-gray-100 p-2 border-r border-gray-300"
          />
          <span className="p-2">Kg</span>
        </div>
      </div>

      {/* Deskripsi Produk */}
      <h2 className="text-2xl font-semibold mb-2">Deskripsi:</h2>
      <p className="text-gray-600 mb-6">{product.description}</p>

      {/* Kegunaan */}
      <h2 className="text-2xl font-semibold mb-2">Kegunaan:</h2>
      <p className="text-gray-600">{product.usage}</p>
    </div>
  );
};

export default ProductContent;
