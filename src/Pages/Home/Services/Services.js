import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ab inventore velit, consequuntur doloremque cupiditate.',
      image: fluoride,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ab inventore velit, consequuntur doloremque cupiditate.',
      image: cavity,
    },
    {
      id: 2,
      name: 'Teeth Whitening',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ab inventore velit, consequuntur doloremque cupiditate.',
      image: whitening,
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center pb-10">
        <h3 className="text-xl text-primary font-bold">OUR SERVICES</h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
