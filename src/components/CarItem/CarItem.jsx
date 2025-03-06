import React from 'react';
import css from './CarItem.module.css';
import { splitAddress } from '../../js/carItem';
import { MainButton } from '../MainButton/MainButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourites } from '../../redux/cars/slice';
import { selectFavourites } from '../../redux/cars/selectors';

export const CarItem = ({ car }) => {
  const { city, country } = splitAddress(car);
  const favouriteArray = useSelector(selectFavourites);
  const dispatch = useDispatch();
  const handleClickFavouriteCar = () => {
    dispatch(toggleFavourites(car.id));
  };
  const isFavourite = favouriteArray.includes(car.id);
  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img src={car.img} alt={car.name} className={css.image} />
        <div className={css.heart} onClick={handleClickFavouriteCar}>
          <svg className={css.icons}>
            {isFavourite ? (
              <use href="./public/images/icons.svg#logoheart" />
            ) : (
              <use href="./public/images/icons.svg#logoheartEmpty" />
            )}
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
