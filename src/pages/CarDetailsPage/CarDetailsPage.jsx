import React, { useEffect } from 'react';
import css from './CarDetails.Page.module.css';
import { useParams } from 'react-router-dom';
import { CarDetailLeft } from '../../components/CarDetailLeft/CarDetailLeft';
import { CarDetailRight } from '../../components/CarDetailRight/CarDetailRight';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarByID } from '../../redux/cars/operations';
import { selectCarId } from '../../redux/cars/selectors';

export const CarDetailsPage = () => {
  const { id } = useParams();
  const carId = useSelector(selectCarId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarByID(id));
  }, [dispatch]);

  return (
    <div className={css.carDetailStyle}>
      <CarDetailLeft car={carId} />
      <CarDetailRight />
    </div>
  );
};

export default CarDetailsPage;
