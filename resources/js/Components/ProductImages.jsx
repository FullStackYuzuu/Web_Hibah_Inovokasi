import React, { useState } from 'react';

const ProductImages = ({ images }) => {
  const limitedImages = images.slice(0, 4);
  const [selectedImage, setSelectedImage] = useState(limitedImages[0]);

  return (
    <div>
      <div className="relative pb-[100%] mb-4 bg-gray-300">
        <img
          src={selectedImage}
          alt="Product Image"
          className="absolute h-full w-full object-cover"
        />
      </div>

      {limitedImages.length > 1 && (
        <div className="flex flex-wrap space-x-2">
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
