import React from "react";

const Content = () => {
    return (
        <section className="w-full mx-auto bg-white py-12 px-4 sm:px-8 lg:px-12 text-orange-500">
            {/* Section Connect With Us */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Ayo Terhubung dengan Kami!</h1>

                <ul className="flex flex-wrap justify-center gap-4 text-black">
                    {/* WhatsApp */}
                    <li>
                        <a
                            href="https://wa.me/[YourNumber]"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            WhatsApp
                        </a>
                    </li>
                    {/* Email */}
                    <li>
                        <a
                            href="mailto:info@yourcompany.com"
                            className="hover:underline"
                        >
                            Email
                        </a>
                    </li>
                    {/* TikTok */}
                    <li>
                        <a
                            href="https://www.tiktok.com/@yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            TikTok
                        </a>
                    </li>
                    {/* Instagram */}
                    <li>
                        <a
                            href="https://www.instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Instagram
                        </a>
                    </li>
                    {/* Shopee */}
                    <li>
                        <a
                            href="https://shopee.co.id/yourshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Shopee
                        </a>
                    </li>
                    {/* Tokopedia */}
                    <li>
                        <a
                            href="https://www.tokopedia.com/yourshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Tokopedia
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Content;
