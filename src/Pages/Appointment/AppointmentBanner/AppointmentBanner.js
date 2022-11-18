import React from 'react';
import chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="py-20">
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
          <div className="mr-10">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(data) => {
                // console.log(data);
                if (data) {
                  setSelectedDate(data);
                }
              }}
            />
            {/* <p>You have selected date: {format(selectedDate, 'PP')}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
