import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/ContentHome';

const Home = () => {
  const products = [
    {
      id: 1, name: 'Lorem ipsum1', price: 150000,
      discount: 50,
      description: 'Lorem ipsum dolor sit amet...',
      usage: 'Lorem ipsum dolor sit amet...',
      images: [
        '/product/p1.jpeg',
        '/product/p2.jpg',
        '/product/p3.jpeg',
        '/product/p4.jpg'
      ]
    },
    {
      id: 2, name: 'Lorem ipsum2', price: '100000',
      description: 'Lorem ipsum dolor sit amet...',
      usage: 'Lorem ipsum dolor sit amet...',
      images: [
        '/product/p4.jpg',
        '/product/p2.jpg',
        '/product/p3.jpeg',
      ]
    },
    {
      id: 3, name: 'Lorem ipsum3', price: '100000',
      description: 'Lorem ipsum dolor sit amet...',
      usage: 'Lorem ipsum dolor sit amet...',
      images: [
        '/product/p4.jpg',
        '/product/p2.jpg',
        '/product/p3.jpeg',
      ]
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
