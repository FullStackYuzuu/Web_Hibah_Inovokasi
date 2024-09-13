import React from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterBox from '../components/FilterBox';

const Catalog = () => {
    const products = [
        {
            id: 1, name: 'Lorem ipsum1', price: 150000,
            discount: 50, // dalam persen        
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p1.jpeg', // Gambar pertama
                '/product/p2.jpg', // Gambar kedua
                '/product/p3.jpeg', // Gambar ketiga
                '/product/p4.jpg'  // Gambar keempat
            ]
        },
        {
            id: 2, name: 'Lorem ipsum2', price: '100000',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.',
            images: [
                '/product/p4.jpg', // Gambar pertama
                '/product/p2.jpg', // Gambar kedua
                '/product/p3.jpeg', // Gambar ketiga
            ]
        },
    ];

    return (
        <section className="container mx-auto py-16">
            <h1 className="text-5xl font-bold mb-4 text-center">Our Catalog</h1>
            <p className="text-gray-600 mb-8 text-center">
                Check out our product catalog.
            </p>
            <div className="flex flex-row">
                <FilterBox />
                <ProductGrid products={products} />
            </div>
        </section>
    );
};

export default Catalog;