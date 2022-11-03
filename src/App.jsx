import { useState } from 'react';

import Rating from './components/Rating';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
      <main className='container'>
        <section className='rating-component'>
          {submit ? (
            <ThankYou rating={rating} />
          ) : (
            <Rating
              setSubmit={setSubmit}
              rating={rating}
              setRating={setRating}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
