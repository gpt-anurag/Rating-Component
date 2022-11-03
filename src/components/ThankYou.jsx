import React from 'react';
import image from '../assets/illustration-thank-you.svg';

const ThankYou = ({ rating }) => {
  return (
    <section className='rate-service thankyou'>
      <div>
        <img
          src={image}
          alt=''
          height='100px'
          className='svg'
          aria-hidden='true'
        />
      </div>

      <p className='final-rating'>You selected {rating} out of 5</p>

      <h1 className='heading'>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
};

export default ThankYou;
