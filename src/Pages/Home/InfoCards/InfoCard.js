import React from 'react';

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;

  return (
    <div className={`card sm:card-side text-white shadow-xl p-6 ${bgClass}`}>
      <figure>
        <img src={icon} alt="InfoCard" />
      </figure>
      <div className="card-body items-center sm:items-start">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
