import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchRestaurants = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'buenos aires',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Algo salió mal');
    }
  };
  useEffect(() => {
    searchRestaurants('');
  }, []);

  return [searchRestaurants, results, errorMessage];
};
