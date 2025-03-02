import css from './CatalogPage.module.css';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CarsList } from '../../components/CarsList/CarsList';
import { fetchCars } from '../../redux/cars/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllCars = async () => {
      await dispatch(fetchCars({ page: 1, limit: 12 }));
    };
    fetchAllCars();
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <SearchBar />
      <CarsList />
    </div>
  );
};

export default CatalogPage;
