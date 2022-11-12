import React from 'react';

const ReviewCard = ({ review }) => {
  const { name, image, review: userReview, location } = review;

  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center gap-6 mt-8">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="" />
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
