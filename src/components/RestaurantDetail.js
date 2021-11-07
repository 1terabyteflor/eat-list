import React, { useContext } from 'react';
import {Context} from '../context/EatListContext'
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const RestaurantDetail = ({ restaurant, navigation }) => {
    const { addToEatList } = useContext(Context);

  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imgStyle} source={{ uri: restaurant.image_url }} />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Button onClick={(title) => {
          addToEatList(title, () => navigation.navigate('Index'));
      }} title="Agregar a mi eat-list"/>
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 12,
  },
  imgStyle: {
    width: 200,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  ratingStyle: {
    color: 'grey',
  },
});
