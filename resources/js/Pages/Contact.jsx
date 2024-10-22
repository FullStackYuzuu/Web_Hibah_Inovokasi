import React from 'react';
import Content from '../components/ContentContact';
import UserLayout from '@/Layouts/UserLayout';
import { usePage } from '@inertiajs/react';


const Contact = () => {
    const { settings } = usePage().props;

    // Check if any settings are available, otherwise don't render the content
    if (!settings || Object.keys(settings).length === 0) {
        return null; // Don't render the component if there are no settings
    }

    return (
        <UserLayout>
            <div className='bg-orange-500'>
                <section className="container mx-auto py-16 px-4 min-h-screen">
                    <Content settings={settings} />
                </section>
            </div>
        </UserLayout>
    );
};

export default Contact;
