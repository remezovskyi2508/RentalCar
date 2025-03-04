import React, { useState } from 'react';
import css from './CarsList.module.css';
import { CarItem } from '../CarItem/CarItem';
import {
  selectCars,
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/cars/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';

export const CarsList = () => {
  const dispatch = useDispatch();
  const { cars = [] } = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const currentPages = useSelector(selectCurrentPage);

  const loadMoreCars = () => {
    dispatch(fetchCars({ page: currentPages + 1 }));
  };

  return (
    <div className={css.container}>
      {cars.length > 0 ? (
        <div className={css.list}>
          {cars.map(car => (
            <CarItem key={car.id} car={car} />
          ))}
        </div>
      ) : null}
      {}
      <div className={css.loadMoreContainer}>
        {totalPages > currentPages && (
          <button className={css.loadMoreButton} onClick={loadMoreCars}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
