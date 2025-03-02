import React from 'react';
import css from './HeroContent.module.css';
import { MainButton } from '../MainButton/MainButton';
import { Link } from 'react-router-dom';

export const HeroContent = () => {
  return (
    <div className={css.heroText}>
      <h1>Find your perfect rental car</h1>
      <p className={css.descr}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to="/catalog">
        <MainButton>View Catalog</MainButton>
      </Link>
    </div>
  );
};
