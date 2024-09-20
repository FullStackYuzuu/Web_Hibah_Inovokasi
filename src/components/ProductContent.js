import React from 'react';
import Button from './Button';

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
        <p className=" line-through">Rp. {price.toLocaleString()}</p>
      )}

      {/* Harga diskon jika ada diskon, harga asli jika tidak */}
      <p className={discount > 0 ? "text-[2rem] mb-2 font-black" : "text-xl font-black mb-2"}>
        Rp. {discountedPrice.toLocaleString()}
      </p>

      <p className=" mb-2">Stok: {product.stock}</p>
      <p className=" mb-4">Minimal Pembelian: {product.minOrder}</p>

      {/* Tombol WhatsApp & Jumlah */}
      <div className="flex items-center mb-6">
        <Button className="bg-white flex items-center px-[7rem] py-[0.5rem] rounded-[0.7rem] text-orange-500 font-bold hover:cursor-pointer" text={"WhatsApp"} imageSrc={"/page/WhatsappLogo.svg"} />

        <div className="flex items-center ml-5 border border-gray-300 rounded-lg text-orange-500">
          <input
            type="number"
            defaultValue={10}
            min={10}
            className="w-16 h-[3rem] text-center bg-gray-100 p-2 border-r border-gray-300"
          />
          <span className="p-2 text-white">Kg</span>
        </div>
      </div>

      {/* Deskripsi Produk */}
      <h2 className="text-2xl font-semibold mb-2">Deskripsi:</h2>
      <p className=" mb-6">{product.description}</p>

      {/* Kegunaan */}
      <h2 className="text-2xl font-semibold mb-2">Kegunaan:</h2>
      <p className="">{product.usage}</p>
    </div>
  );
};

export default ProductContent;
