import React from 'react';
import css from './MainButton.module.css';

export const MainButton = ({children}) => {
  return (
    <>
      <button className={css.mainBtn}>{children}</button>
    </>
  );
};
