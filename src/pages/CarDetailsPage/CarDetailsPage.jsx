import React from 'react';
import { useParams } from 'react-router-dom';

export const CarDetailsPage = () => {
  const { id } = useParams();

  return <div>CarDetailsPage</div>;
};

export default CarDetailsPage;
