import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: 'Opening Hours',
      description: 'Opens 9.00am to 5.00pm everyday',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
    {
      id: 2,
      name: 'Our Locations',
      description: ' Level-4, 34, Banani, Dhaka',
      icon: marker,
      bgClass: 'bg-accent',
    },
    {
      id: 3,
      name: 'Contact Us ',
      description: '+0945 453 344',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {cardData.map((card, index) => (
        <InfoCard key={index} card={card}></InfoCard>
      ))}
    </section>
  );
};

export default InfoCards;
