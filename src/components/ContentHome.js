import React from 'react';
import Button from './Button';
import ProductGrid from './ProductGrid'; // Import ProductGrid

const Content = ({ products }) => {
    return (
        <section className="mx-auto bg-orange-500 py-[3rem]">

            {/* Section Tentang Kami */}
            <section className="bg-cover bg-center h-[40rem] pr-[5rem] text-white p-[4rem] text-right ms-[9rem] my-[3rem] rounded-[2rem] brightness-95"
                style={{ backgroundImage: "url('/page/image2.svg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-[2rem]"></div>

                <div className="relative z-10">
                    <h2 className="text-[96px] font-bold mb-2">Tentang Kami</h2>
                    <p className="text-white mb-6 text-[24px] pl-[25rem] font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis.
                    </p>
                    <Button
                        text={"Tentang Kami"}
                        to="/about"
                        className="bg-orange-500 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-200"
                    />
                </div>
            </section>

            {/* Section Produk Andalan */}
            <div className='flex flex-col justify-items-center mb-[3rem] bg-white text-orange-500 py-[3rem] rounded-[2rem]'>
                <h2 className='text-[96px] font-bold text-center'>Produk Andalan</h2>
                <p className="text-[24px] font-light text-center mb-[4rem]">
                    Ini merupakan beberapa produk andalan kami.
                </p>
                {/* Gunakan ProductGrid untuk menampilkan 3 produk */}
                <ProductGrid products={products.slice(0, 3)} />

                {/* Button Lihat Selengkapnya */}
                <div className="text-center mt-8">
                    <Button
                        text={"Lihat Selengkapnya"}
                        className="bg-orange-500 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-200"
                        to="/catalog"
                    />
                </div>
            </div>

        </section>
    );
};

export default Content;
