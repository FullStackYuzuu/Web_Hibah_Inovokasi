import React from 'react';

const Button = ({text}) => {
    return (
        <button className="bg-gray-900 text-white py-2 px-6 rounded-lg">{text}</button>
    );
};

export default Button;