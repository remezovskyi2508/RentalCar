import { Suspense, lazy } from 'react';
import '../components/App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CarDetailsPage = lazy(() => import('../pages/CarDetailsPage/CarDetailsPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CarDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
