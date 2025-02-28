import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.bgImage}>
      <div className={css.heroText}>
        <h1>Find your perfect rental car</h1>
        <p>Reliable and budget-friendly rentals for any journey</p>
        <button>View Catalog</button>
      </div>
    </div>
  );
};

export default HomePage;
