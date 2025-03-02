import React from 'react';
import css from './HomePage.module.css';
import { HeroContent } from '../../components/HeroContent/HeroContent';

const HomePage = () => {
  return (
    <div className={css.bgImage}>
      <HeroContent />
    </div>
  );
};

export default HomePage;
