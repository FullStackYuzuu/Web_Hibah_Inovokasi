import React from 'react';
import { usePage } from '@inertiajs/react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductImages from '../components/ProductImages';
import ProductContent from '../components/ProductContent';
import UserLayout from '@/Layouts/UserLayout';

const ProductDetail = () => {
    const { props } = usePage();
    const { product } = props;

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <UserLayout>
            <div className="bg-orange-500">
                <section className="container mx-auto px-4 py-9 text-white">
                    <Breadcrumbs product={product} />
                    <ProductContent product={product} />
                </section>
            </div>
        </UserLayout>
    );
};

export default ProductDetail;
