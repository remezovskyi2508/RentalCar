import React, { useEffect, useState } from 'react';
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
  const currentPage = useSelector(selectCurrentPage);
  const [carsOld, setCarsOld] = useState([]);

  const loadMoreCars = () => {
    dispatch(fetchCars({ page: currentPage + 1 }));
  };

  useEffect(() => {
    if (currentPage === 1) {
      setCarsOld(cars);
    } else {
      setCarsOld(prev => [...prev, ...cars]);
    }
  }, [cars]);

  return (
    <div className={css.container}>
      {carsOld.length > 0 ? (
        <div className={css.list}>
          {carsOld.map(car => (
            <CarItem key={car.id} car={car} />
          ))}
        </div>
      ) : null}
      {}
      <div className={css.loadMoreContainer}>
        {totalPages > currentPage && (
          <button className={css.loadMoreButton} onClick={loadMoreCars}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
