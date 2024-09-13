import React from 'react';
import Button from './Button';

const Content = ({}) => {
    return (
        <section className="container mx-auto ">
            <div className="bg-gray-200 p-[4rem] pr-[5rem] text-right -me-[3.8rem] ms-[5rem] my-[3rem]">
                <h2 className="text-[96px] font-bold mb-2">Lorem Ipsum</h2>
                <p className="text-gray-600 mb-6 text-[24px] pl-[25rem] font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar. Quisque suscipit massa libero, ut blandit lorem aliquam a. Vivamus efficitur massa ut magna interdum lobortis. Suspendisse varius lacinia nisl, a auctor nibh vestibulum sed. Etiam tempor dui a mi blandit pharetra. Nam ex turpis, accumsan vel sodales a, viverra in leo. Mauris quis consequat nunc, et commodo erat. Donec nec ipsum et nulla pellentesque sollicitudin. Nunc nibh risus, commodo a mattis et, congue ut nulla. Cras tincidunt neque vitae metus rutrum, nec tristique leo fringilla. Nam mattis ex at ex ultricies mattis.
                </p>
                <Button text={"Lorem Ipsum"}/>
            </div>

            <div className='flex flex-col justify-items-center mb-[3rem]'>
                <h2 className='text-[96px] font-bold text-center'>Lorem Ipsum</h2>
                <p className="text-gray-600 text-[24px] font-light text-center mb-[4rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sit amet tortor in pulvinar.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] ms-[5rem] me-[5rem]">
                    <div className="bg-gray-300 h-[30rem]"></div>
                    <div className="bg-gray-300 h-[30rem]"></div>
                    <div className="bg-gray-300 h-[30rem]"></div>
                </div>
                <div className="text-center mt-8">
                    <Button text={"Lorem Ipsum"}/>
                </div>
            </div>

        </section>
    );
};

export default Content;
