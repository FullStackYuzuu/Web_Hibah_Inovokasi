import React from 'react';

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:w-1/2">
                <button onClick={onClose} className="text-red-500 text-lg mb-4">✕ Tutup</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
