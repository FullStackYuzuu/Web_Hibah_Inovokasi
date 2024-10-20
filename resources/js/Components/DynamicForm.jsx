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
            setFormData({ ...formData, [name]: files }); // Menyimpan file ke formData
        } else {
            setFormData({ ...formData, [name]: value }); // Menyimpan value ke formData
        }
    };

    // Handle perubahan pada input kustom
    const handleCustomChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
                // Tangani custom field yang diisi melalui handleCustomChange
                formDataToSubmit.append(field.name, formData[field.name] || '');
            } else {
                formDataToSubmit.append(field.name, formData[field.name] || '');
            }
        });

        Inertia.post(submitUrl, formDataToSubmit, {
            onError: (errors) => setErrors(errors),
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
