import React from 'react';
import css from './SmallButton.module.css';

export const SmallButton = ({ children, onClick }) => {
  return (
    <>
      <button className={css.submit} type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};
