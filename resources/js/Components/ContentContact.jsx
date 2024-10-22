import React from 'react';

const Content = ({ settings }) => {
    return (
        <section className="w-full mx-auto bg-white py-12 px-4 sm:px-8 lg:px-12 text-orange-500">
            {/* Section Connect With Us */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Ayo Terhubung dengan Kami!</h1>

                <ul className="flex flex-wrap justify-center gap-4 text-black">
                    {settings.whatsapp_number && (
                        <li>
                            <a
                                href={`https://wa.me/${settings.whatsapp_number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                WhatsApp
                            </a>
                        </li>
                    )}
                    {settings.email && (
                        <li>
                            <a href={`mailto:${settings.email}`} className="hover:underline">
                                Email
                            </a>
                        </li>
                    )}
                    {settings.tiktok && (
                        <li>
                            <a
                                href={settings.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                TikTok
                            </a>
                        </li>
                    )}
                    {settings.instagram && (
                        <li>
                            <a
                                href={settings.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Instagram
                            </a>
                        </li>
                    )}
                    {settings.shopee && (
                        <li>
                            <a
                                href={settings.shopee}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Shopee
                            </a>
                        </li>
                    )}
                    {settings.tokopedia && (
                        <li>
                            <a
                                href={settings.tokopedia}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Tokopedia
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Content;
