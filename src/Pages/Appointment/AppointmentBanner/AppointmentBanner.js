import React from 'react';
import chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';

const AppointmentBanner = () => {
  return (
    <header className="py-40">
      <div
        className="hero "
        style={{
          background: `url(${bannerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: ' left',
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:w-1/2  rounded-lg shadow-2xl" alt="" />
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
