import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Search from '../components/Search';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';


const CreateScreen = () => {
  const [term, setTerm] = useState('');
  const [searchRestaurants, restaurants, errorMessage] = useResults();

  return (
    <View style={styles.main}>
      <Search term={term} onTermChange={setTerm} onTermSubmit={() => searchRestaurants(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList 
          style={styles.main}
          restaurants={restaurants}/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignContent: 'center',
    justifyContent: 'space-between',
  }
});

export default CreateScreen;
