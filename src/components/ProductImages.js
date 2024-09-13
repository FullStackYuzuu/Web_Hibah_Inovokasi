import React, { useState } from 'react';

const ProductImages = ({ images }) => {
  // Batasi jumlah gambar maksimal yang ditampilkan menjadi 4
  const limitedImages = images.slice(0, 4);
  const [selectedImage, setSelectedImage] = useState(limitedImages[0]); // Set gambar default

  return (
    <div>
      {/* Gambar Utama */}
      <div className="relative pb-[100%] mb-4 bg-gray-300">
        <img
          src={selectedImage}
          alt="Product Image"
          className="absolute h-full w-full object-cover"
        />
      </div>

      {/* Thumbnail hanya ditampilkan jika ada lebih dari 1 gambar */}
      {limitedImages.length > 1 && (
        <div className="flex space-x-2">
          {limitedImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative w-16 h-16 bg-gray-300 border-2 ${
                selectedImage === image ? 'border-black' : 'border-transparent'
              }`}
            >
              <img src={image} alt={`Thumbnail ${index}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
