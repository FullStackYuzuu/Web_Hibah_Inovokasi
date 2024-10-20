import React from 'react';
import Content from '../components/ContentContact';
import UserLayout from '@/Layouts/UserLayout';


const Contact = () => {
  return (
    <UserLayout>
    <div className='bg-orange-500'>
      <section className="container mx-auto py-16 px-4 min-h-screen">
        <Content />
      </section>
    </div>
    </UserLayout>
  );
};

export default Contact;
