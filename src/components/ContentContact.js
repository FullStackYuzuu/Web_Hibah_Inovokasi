import React from "react";

const Content = ({ }) => {
    return (
        <div className="bg-white me-[7rem] ms-[7rem] p-[3rem] text-orange-500 rounded-[1.5rem] pl-[2rem] text-center">
            <h1 className="text-5xl font-bold mb-8">Ayo Terhubung dengan Kami!</h1>

            <ul className="list-none text-black flex flex-row gap-[2rem] justify-center">
                {/* WhatsApp */}
                <li >
                    <a
                        href="https://wa.me/[YourNumber]"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline"
                    >
                        WhatsApp
                    </a>
                </li>

                {/* Email */}
                <li >
                    <a
                        href="mailto:info@yourcompany.com"
                        className=" hover:underline"
                    >
                        Email
                    </a>
                </li>

                {/* TikTok */}
                <li >
                    <a
                        href="https://www.tiktok.com/@yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline"
                    >
                        TikTok
                    </a>
                </li>

                {/* Instagram */}
                <li >
                    <a
                        href="https://www.instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline"
                    >
                        Instagram
                    </a>
                </li>

                {/* Shopee */}
                <li >
                    <a
                        href="https://shopee.co.id/yourshop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline"
                    >
                        Shopee
                    </a>
                </li>

                {/* Tokopedia */}
                <li >
                    <a
                        href="https://www.tokopedia.com/yourshop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline"
                    >
                        Tokopedia
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default Content;