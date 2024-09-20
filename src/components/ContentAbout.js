import React from "react";

const Content = ({ }) => {
    return (
        <div className="flex flex-row bg-white me-[7rem] ms-[7rem] p-5 text-orange-500 rounded-[1.3rem] text-">
            <div className="w-[40rem] bg-orange-500 m-[1rem] mr-[3rem]">
            </div>
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