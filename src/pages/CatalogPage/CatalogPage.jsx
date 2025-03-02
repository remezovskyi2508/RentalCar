import css from './CatalogPage.module.css';

import { SearchBar } from '../../components/SearchBar/SearchBar';

const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <SearchBar />
    </div>
  );
};

export default CatalogPage;
