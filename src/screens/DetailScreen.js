import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [details, setDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //TODO: mover a un Hook
  const restaurantDetail = async () => {
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


  if (!details) {
    return null;
  }
  console.log(details);

  return (
    <View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={details.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imgStyle} source={{ uri: item }} />;
        }}
      />
      <View style={styles.main}>
        <Text style={styles.nameStyle}>{details.name}</Text>
        {details.is_closed ? (
          <Text style={styles.closedStyle}>Cerrado</Text>) : (
          <Text style={styles.openStyle}>Abierto</Text>
        )}
        <Text style={styles.ratingStyle}>
        {details.rating} estrellas, {details.review_count} reseñas
      </Text>
      {details.display_phone ? <Text>Tel: {details.display_phone}</Text> : null}
      </View>
{/* 
      <Button title="Agregar a mi eat-list" onPress={(title) => {
        addToEatList(details.name, () => navigation.navigate('Index'));
      }}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10
  },
  imgStyle: {
    width: 330,
    height: 200,
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 5
  },
  nameStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 4,
  },
  ratingStyle: {
    fontSize: 18,
    color: 'grey',
  },
  openStyle: {
   fontSize: 18,
   fontWeight: 'bold',
   color: 'green',
  },
  closedStyle: {
    color: 'red',
  },
});

export default DetailScreen;
