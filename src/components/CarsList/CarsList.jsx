import React, { useState } from 'react';
import css from './CarsList.module.css';
import { CarItem } from '../CarItem/CarItem';
import { selectCars, selectTotalCars } from '../../redux/cars/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';

export const CarsList = () => {
  const dispatch = useDispatch();
  const { cars = [] } = useSelector(selectCars);
  const totalCars = useSelector(selectTotalCars);

  const [limit, setLimit] = useState(12);

  const loadMoreCars = () => {
    const newLimit = limit + 12;
    setLimit(newLimit);
    dispatch(fetchCars({ limit: newLimit }));
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
        {totalCars > limit && (
          <button className={css.loadMoreButton} onClick={loadMoreCars}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
