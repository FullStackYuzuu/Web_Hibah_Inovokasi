import React from 'react';
import Button from './Button';
import ProductGrid from './ProductGrid';

const Content = ({ products }) => {
    return (
        <section className="w-full mx-auto bg-orange-500 py-12 4xl:py-20">

            {/* Section Tentang Kami */}
            <section className="relative bg-cover bg-center h-[40rem] px-4 sm:px-8 lg:px-12 text-white py-16 4xl:h-[60rem] 4xl:py-20 text-center sm:text-right  brightness-95"
                style={{ backgroundImage: "url('/page/image2.svg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10">
                    <h2 className="text-[48px] sm:text-[72px] lg:text-[96px] font-bold mb-4 4xl:text-[128px]">Tentang Kami</h2>
                    <p className="text-white mb-6 text-[18px] sm:text-[24px] lg:text-[32px] max-w-xl mx-auto sm:max-w-full sm:pl-[15rem] font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a.
                    </p>
                    <Button
                        text={"Tentang Kami"}
                        to="/about"
                        className="bg-orange-500 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-200 4xl:py-5 4xl:px-10"
                    />
                </div>
            </section>

            {/* Section Produk Andalan */}
            <div className="flex flex-col items-center mb-12 bg-white text-orange-500 py-12 4xl:py-20">
                <h2 className="text-4xl sm:text-6xl font-bold text-center 4xl:text-8xl">Produk Andalan</h2>
                <p className="text-center my-8 text-[16px] sm:text-[24px] 4xl:text-[32px] max-w-xl mx-auto">
                    Produk unggulan dari kami yang sudah terbukti oleh waktu.
                </p>

                {/* Grid Produk */}
                <ProductGrid products={products} />
            </div>
        </section>
    );
}

export default Content;
