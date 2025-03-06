import React from 'react';
import css from './MainButton.module.css';

export const MainButton = ({ children }) => {
  return (
    <>
      <button type="button" className={css.mainBtn}>
        {children}
      </button>
    </>
  );
};
