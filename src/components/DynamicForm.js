import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'; // Untuk navigasi Cancel

const DynamicForm = ({ fields, onSubmit, initialData = {}, cancelLink }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-lg w-full">
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block mb-2 font-bold text-gray-700">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
        ))}

        <div className="flex justify-between mt-6">
          {/* Button Submit */}
          <Button text="Submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105" />
          
          {/* Button Cancel */}
          <Button
            text="Cancel"
            to={cancelLink}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
          />
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
