import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-[15rem] text-center"
      style={{
        backgroundImage: `url('/page/image.svg')`,
      }}
    >
      {/* Overlay image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten teks */}
      <div className="relative z-10">
        <h1 className="text-[48px] md:text-[64px] lg:text-[96px] font-bold text-white mb-2">
          RH LAKSAMANA
        </h1>
        <p className="text-white text-[18px] md:text-[24px]">
          Kepuasan Pelanggan adalah prioritas utama kami
        </p>
      </div>
    </section>
  );
};

export default Hero;
