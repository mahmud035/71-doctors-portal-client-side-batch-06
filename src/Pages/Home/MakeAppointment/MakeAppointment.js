import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section className="mt-32" style={{ background: `url(${appointment})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h4 className="text-primary text-2xl font-bold pb-3">
              Appointment
            </h4>
            <h1 className="text-4xl font-bold text-white">
              Make an Appointment Today
            </h1>
            <p className="py-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              veritatis officia voluptatem voluptatibus perspiciatis laudantium
              alias possimus quas architecto. Fugit asperiores, minus ad
              repudiandae laborum explicabo quo ratione minima non vero eius.
              Soluta, similique unde voluptates magnam dolore placeat minima
              ipsum facere quisquam perferendis, delectus dignissimos.
              Aspernatur at consequatur numquam vero adipisci! Iusto eius
              reprehenderit amet culpa accusantium ea saepe ipsa totam ex
              adipisci. perspiciatis ad cum.
            </p>
            <PrimaryButton>Make Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
