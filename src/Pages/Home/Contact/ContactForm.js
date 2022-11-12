import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactForm = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <div className="card-body sm:w-96">
            <div className="form-control pb-3">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control pb-3">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Your Message"
            ></textarea>
            <div className="form-control mt-6 w-fit mx-auto">
              <PrimaryButton>Subscribe</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
