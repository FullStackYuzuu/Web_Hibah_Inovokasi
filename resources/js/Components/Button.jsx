import React from 'react';
import { Link } from '@inertiajs/react';

const Button = ({ text, className, to, imageSrc, imageAlt, onClick }) => {
    // Menentukan kelas default jika className tidak diberikan
    const defaultClass = "bg-orange-500 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 duration-200";
    const combinedClass = `${className || defaultClass}`;

    // Konten button dengan gambar opsional
    const buttonContent = (
        <>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={imageAlt || 'icon'}
                    className="w-10 h-10 mr-2" // Ukuran gambar kecil dan berjarak
                />
            )}
            <span>{text}</span>
        </>
    );

    // Jika `to` disediakan, gunakan <Link> untuk navigasi
    if (to) {
        return (
            <a href={to} className={combinedClass}>
                {buttonContent}
            </a>



        );
    }

    // Jika `to` tidak disediakan, gunakan <button>
    return <button className={combinedClass} onClick={onClick}>{buttonContent}</button>;
};

export default Button;
