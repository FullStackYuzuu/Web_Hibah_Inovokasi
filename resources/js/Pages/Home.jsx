import React from 'react';
import Hero from '@/Components/Hero';
import Content from '../components/ContentHome';
import UserLayout from '@/Layouts/UserLayout';
import { usePage } from '@inertiajs/react';

export default function Home() {
    const { products: serverProducts = [] } = usePage().props;

    return (
        <UserLayout>
            <div>
                <Hero />
                <Content products={serverProducts} />
            </div>
        </UserLayout>
    );
};
