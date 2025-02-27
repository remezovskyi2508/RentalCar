import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className={css.nav}>
        <Outlet />
      </main>
    </div>
  );
};
