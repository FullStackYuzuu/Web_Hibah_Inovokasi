import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const DynamicForm = ({ fields, onSubmit, initialData = {}, cancelLink }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [filePaths, setFilePaths] = useState(initialData.images || []); // Handle multiple image paths

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const validateField = (field, value) => {
    let error = '';
    if (field.required && !value) {
      error = `${field.label} is required`;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue = value;

    if (e.target.type === 'file') {
      const selectedFiles = [...files];
      const fileArray = selectedFiles.map(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // You could replace this with file upload logic
        return URL.createObjectURL(file); // Store file URLs temporarily
      });
      setFilePaths(fileArray);
      newValue = fileArray;
    }

    setFormData({ ...formData, [name]: newValue });

    const error = validateField(fields.find(f => f.name === name), newValue);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const dataToSubmit = { ...formData, images: filePaths };
    onSubmit(dataToSubmit);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12">
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
            ) : field.type === 'file' ? (
              <input
                type="file"
                name={field.name}
                multiple={field.multiple || false} // Enable multiple file selection
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

            {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <Button text="Submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105" />
          <Button text="Cancel" to={cancelLink} className="bg-gray-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105" />
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
