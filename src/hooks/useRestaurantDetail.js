import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [details, setDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const restaurantDetail = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setDetails(response.data);
    } catch (err) {
      setErrorMessage('Algo salió mal');
    }
  };

  useEffect(() => {
    restaurantDetail();
  }, []);

  return [restaurantDetail, details, errorMessage];
};
