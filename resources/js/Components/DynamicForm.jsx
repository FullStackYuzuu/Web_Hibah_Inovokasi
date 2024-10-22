import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import Button from './Button';

const DynamicForm = ({ fields, submitUrl, initialData = {}, cancelLink }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (e.target.type === 'file') {
            // Batasi jumlah file yang diunggah maksimal 3
            const selectedFiles = files.length > 3 ? Array.from(files).slice(0, 3) : files;
            setFormData({ ...formData, [name]: selectedFiles });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle perubahan pada input kustom
    const handleCustomChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    // Validasi form untuk field yang required
    const validateForm = () => {
        const newErrors = {};
        fields.forEach((field) => {
            if (field.required && (!formData[field.name] || formData[field.name].length === 0)) {
                newErrors[field.name] = `${field.label} is required`; // Pesan error jika required
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true jika tidak ada error
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lakukan validasi form
        if (!validateForm()) {
            return; // Jika ada error, jangan kirim ke server
        }

        const formDataToSubmit = new FormData();

        if (formData.id) {
            formDataToSubmit.append('id', formData.id);
        }

        fields.forEach((field) => {
            if (field.type === 'file' && formData[field.name]) {
                Array.from(formData[field.name]).forEach(file => {
                    formDataToSubmit.append(field.name, file);
                });
            } else if (field.type === 'custom') {
                formDataToSubmit.append(field.name, formData[field.name] || '');
            } else {
                formDataToSubmit.append(field.name, formData[field.name] || '');
            }
        });

        Inertia.post(submitUrl, formDataToSubmit, {
            onError: (errors) => setErrors(errors), // Tangani error dari server
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12">
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-lg w-full" method="POST" encType="multipart/form-data">
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
                                multiple={field.multiple || false}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        ) : field.type === 'custom' ? (
                            field.customInput // Tampilkan customInput jika ada
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
                    <Link href={cancelLink}>
                        <Button text="Cancel" className="bg-gray-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default DynamicForm;
