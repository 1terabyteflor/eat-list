import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import mainStyles from '../utils/styles/mainStyles';
import { darkGray } from '../utils/colors';

const RestaurantDetail = ({ restaurant }) => {

    return (
        <View style={mainStyles.container}>
        <Image style={styles.imgStyle} source={{ uri: restaurant.image_url }} />
        <Text style={styles.nameStyle}>{restaurant.name}</Text>
        <Text>
        {restaurant.rating} estrellas, {restaurant.review_count} reseñas
      </Text>
        </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    color: darkGray
  }
});
