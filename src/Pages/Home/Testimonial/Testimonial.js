import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      image: people1,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit perspiciatis omnis assumenda enim quibusdam quos provident unde, autem facere quo soluta perferendis quaerat, possimus impedit quam, inventore cumque doloribus!',
      location: 'California',
    },
    {
      _id: 2,
      name: 'Winson Herry',
      image: people2,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit perspiciatis omnis assumenda enim quibusdam quos provident unde, autem facere quo soluta perferendis quaerat, possimus impedit quam, inventore cumque doloribus!',
      location: 'California',
    },
    {
      _id: 3,
      name: 'Winson Herry',
      image: people3,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit perspiciatis omnis assumenda enim quibusdam quos provident unde, autem facere quo soluta perferendis quaerat, possimus impedit quam, inventore cumque doloribus!',
      location: 'California',
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img src={quote} className="w-24 lg:w-48 " alt="" />
        </figure>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
