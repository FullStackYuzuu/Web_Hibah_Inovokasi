import React from "react";

const Content = () => {
    return (
        <section className="w-full mx-auto bg-white py-12 px-4 sm:px-8 lg:px-12 text-orange-500">
            <div className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
                {/* Logo */}
                <img
                    src="/LogoUtama.png"
                    alt="Google"
                    className="w-[20rem] lg:w-[40rem] mb-8 lg:mb-0 lg:mr-8"
                />

                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tentang Kami</h1>
                    <p className="text-lg sm:text-xl leading-relaxed">
                        We are a leading company in the industry, committed to providing quality products and services to our customers. Our journey began in [Year], and since then, we have grown exponentially due to our dedication to excellence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Content;
