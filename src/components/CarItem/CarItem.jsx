import React from 'react';
import css from './CarItem.module.css';
import { splitAddress } from '../../js/carItem';
import { MainButton } from '../MainButton/MainButton';
import { Link } from 'react-router-dom';

export const CarItem = ({ car }) => {
  const { city, country } = splitAddress(car);
  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img src={car.img} alt={car.name} className={css.image} />
        <div className={css.heart}>
          <svg className={css.icons}>
            <use href="./public/images/icons.svg#logoheart" />
          </svg>
        </div>
      </div>
      <div className={css.details}>
        <div className={css.titleContainer}>
          <h3 className={css.title}>
            {car.brand} <span className={css.highlight}>{car.model}</span>,{' '}
            {car.year}
          </h3>
          <span className={css.price}>${car.rentalPrice}</span>
        </div>
        <div className={css.descrList1}>
          <div className={css.descrWrapper}>
            <p className={css.descr}>{country}</p>
          </div>
          <div className={css.descrWrapper}>
            <p className={css.descr}>{city}</p>
          </div>
          <div className={css.descrWrapper}>
            <p className={css.descr}>{car.rentalCompany}</p>
          </div>
        </div>
        <div className={css.descrList2}>
          <div className={css.descrWrapper}>
            <p className={css.descr}>{car.type}</p>
          </div>
          <div className={css.descrWrapper}>
            <p className={css.descr}>{car.mileage} km</p>
          </div>
        </div>
        <div className={css.btn}>
          <Link to={`/catalog/${car.id}`}>
            <MainButton>Read more</MainButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
