import React from 'react';

const ServiceCard = ({ service }) => {
  const { name, image, description } = service;

  return (
    <div className="card  p-4 shadow-xl">
      <figure>
        <img src={image} className="pt-8" alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
