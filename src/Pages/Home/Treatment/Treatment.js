import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
  return (
    <section>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Treatment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
