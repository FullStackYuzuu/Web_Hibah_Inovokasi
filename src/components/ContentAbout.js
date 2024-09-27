import React from "react";

const Content = ({ }) => {
    return (
        <div className="flex flex-row bg-white me-[7rem] ms-[7rem] p-5 text-orange-500 rounded-[1.3rem] text-">
            <img
                src="/LogoUtama.png"
                alt="Google"
                className="w-[40rem] mr-2"
            />{/* Logo */}
            <div>
                <h1 className="text-5xl font-bold mb-8 mt-12">
                    Tentang Kami
                </h1>
                {/* Company Overview */}
                <div className="mb-12">
                    <p className=" leading-relaxed">
                        We are a leading company in the industry, committed to providing quality products and services to our customers. Our journey began in [Year], and since then, we have grown exponentially due to our dedication to excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Content;