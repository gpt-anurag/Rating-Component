import { useState } from 'react';
import star from '../assets/icon-star.svg';

const Rating = ({ setSubmit, rating, setRating }) => {
  return (
    <section className='rate-service'>
      <img src={star} alt='' className='circle m-1' aria-hidden='true' />
      <h1 className='m-1 heading'>How did we do?</h1>
      <p className='m-1'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className='rating-section m-1'>
        {[...Array(5)].map((rate, index) => {
          const ratingValue = index + 1;
          return (
            <label
              key={index}
              className={
                ratingValue === rating
                  ? 'circle rating rating-selected'
                  : 'circle rating'
              }
            >
              {ratingValue}
              <input
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
            </label>
          );
        })}
      </div>
      <button className='submit-button' onClick={() => setSubmit(true)}>
        SUBMIT
      </button>
    </section>
  );
};

export default Rating;
