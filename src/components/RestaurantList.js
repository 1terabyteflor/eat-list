/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RestaurantDetail from './RestaurantDetail';

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
    flex: 1,
    alignContent: 'center',
  },
});

const RestaurantList = ({ restaurants }) => {
  const navigation = useNavigation();

  if (!restaurants.length) {
    return null;
  }

  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { id: item.id })}>
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RestaurantList;
