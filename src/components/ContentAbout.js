import React from "react";

const Content = ({ }) => {
    return (
        <div className="bg-gray-300 me-[7rem] ms-[7rem] p-5 text-black rounded-[1.5rem] text-">
            <h1 className="text-5xl font-bold mb-8 mt-12">
                About Us
            </h1>
            {/* Company Overview */}
            <div className="mb-12">
                <p className=" leading-relaxed">
                    We are a leading company in the industry, committed to providing quality products and services to our customers. Our journey began in [Year], and since then, we have grown exponentially due to our dedication to excellence.
                </p>
            </div>
        </div>
    );
};
export default Content;