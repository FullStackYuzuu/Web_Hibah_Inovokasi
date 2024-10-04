import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/ContentHome';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 150000,
      discount: 50,
      description: 'This is the description for Product A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur massa ut magna interdum lobortis.',
      usage: 'Usage instructions for Product A. Vivamus efficitur massa ut magna interdum lobortis.',
      images: [
        '/product/p1.jpeg',
        '/product/p2.jpg',
        '/product/p3.jpeg',
        '/product/p4.jpg'
      ],
      stock: '1000 Kg',
      minOrder: '10 Kg',
      category: 'Kategori 1'
    },
    {
      id: 2,
      name: 'Product B',
      price: 100000,
      discount: 20,
      description: 'This is the description for Product B. Vivamus efficitur massa ut magna interdum lobortis. Etiam tempor dui a mi blandit pharetra.',
      usage: 'Usage instructions for Product B. Nam mattis ex at ex ultricies mattis.',
      images: [
        '/product/p1.jpeg',
        '/product/p2.jpg',
        '/product/p3.jpeg'
      ],
      stock: '500 Kg',
      minOrder: '5 Kg',
      category: 'Kategori 1'
    },
    {
      id: 3,
      name: 'Product C',
      price: 200000,
      discount: 30,
      description: 'This is the description for Product C. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed.',
      usage: 'Usage instructions for Product C. Cras tincidunt neque vitae metus rutrum.',
      images: [
        '/product/p1.jpeg',
        '/product/p2.jpg',
        '/product/p3.jpeg'
      ],
      stock: '800 Kg',
      minOrder: '15 Kg',
      category: 'Kategori 2'
    },
  ];

  return (
    <div>
      <Hero />
      <Content products={products} />
    </div>
  );
};

export default Home;
