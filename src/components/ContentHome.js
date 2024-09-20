import React from 'react';
import Button from './Button';

const Content = ({ products }) => {
    return (
        <section className=" mx-auto bg-orange-500 py-[3rem]">

            <section className="bg-cover bg-center h-[40rem] pr-[5rem] text-white p-[4rem] text-right ms-[9rem] my-[3rem] rounded-[2rem] brightness-95"
                style={{ backgroundImage: "url('/page/image2.svg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-[2rem]"></div>

                <div className="relative z-10">
                    <h2 className="text-[96px] font-bold mb-2">Tentang Kami</h2>
                    <p className="text-white mb-6 text-[24px] pl-[25rem] font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.
                    </p>
                    <Button text={"Tentang Kami"} to="/about" className={"bg-orange-500 text-white py-3 px-6 rounded-lg"}/>
                </div>
            </section>







            <div className='flex flex-col justify-items-center mb-[3rem] text-white'>
                <h2 className='text-[96px] font-bold text-center'>Produk Andalan</h2>
                <p className="text-[24px] font-light text-center mb-[4rem]">
                    Ini merupakan beberapa produk andalan kami.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] mx-[5rem]">
                    {/* Render produk dari props */}
                    {products.slice(0, 3).map((product, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-[30rem] object-cover w-full rounded-md"
                            />
                            <h3 className="text-[20px] font-semibold mt-4">{product.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button text={"Lihat Selengkapnya"} className={"bg-white text-orange-500 py-3 px-6 rounded-lg"} to="/catalog" />
                </div>
            </div>

        </section >
    );
};

export default Content;
