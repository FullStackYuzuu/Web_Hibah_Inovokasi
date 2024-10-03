import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-32 md:py-40 text-center"
      style={{
        backgroundImage: `url('/page/image.svg')`,
      }}
    >
      {/* Overlay image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten teks */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-bold text-white mb-4">
          RH LAKSAMANA
        </h1>
        <p className="text-white text-[16px] md:text-[18px] lg:text-[24px] max-w-xl mx-auto">
          Kepuasan Pelanggan adalah prioritas utama kami
        </p>
      </div>
    </section>
  );
};

export default Hero;
