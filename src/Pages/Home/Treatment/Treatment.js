import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
  return (
    <div className="card lg:card-side shadow-xl">
      <figure>
        <img src={treatment} className="h-fit" alt="Album" />
      </figure>

      <div className="card-body lg:w-1/2 pl-20">
        <h2 className="card-title text-5xl font-bold">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p className="flex-grow-0 py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque
          doloremque unde esse natus. Dolor laudantium cumque neque quaerat
          consequatur eveniet at, consequuntur error. Expedita, id asperiores!
          Quod, tenetur autem!50
        </p>
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white max-w-fit ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Treatment;
