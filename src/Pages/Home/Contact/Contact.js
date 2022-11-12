import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      className="my-20 py-24"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center pb-8">
        <h3 className="text-xl text-primary font-bold">Contact Us</h3>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>

      <ContactForm></ContactForm>
    </section>
  );
};

export default Contact;
