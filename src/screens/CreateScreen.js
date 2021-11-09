/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import Search from '../components/Search';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

const CreateScreen = () => {
  const [term, setTerm] = useState('');
  const [searchRestaurants, restaurants, errorMessage] = useResults();

  const onTermSubmitHandler = useCallback(() => searchRestaurants(term), [term]);

  return (
    <View style={styles.main}>
      <Search term={term} onTermChange={setTerm} onTermSubmit={onTermSubmitHandler} />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <RestaurantList style={styles.main} restaurants={restaurants} />
      </ScrollView>
    </View>
  );
};

export default CreateScreen;
