import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Search from '../components/Search';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';


const CreateScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchRestaurants, restaurants, errorMessage] = useResults();

  return (
    <View>
      <Search term={term} onTermChange={setTerm} onTermSubmit={() => searchRestaurants(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
      <ScrollView>
        <RestaurantList
          restaurants={restaurants}/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
