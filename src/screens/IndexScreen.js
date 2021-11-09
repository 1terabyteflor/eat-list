/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../utils/styles/mainStyles';
import { Context } from '../context/EatListContext';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderRadius: 30,
    borderWidth: 1.25,
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
  icon: {
    fontSize: 28,
    alignSelf: 'flex-end',
    marginTop: 5,
    color: 'green',
    paddingStart: 20,
    paddingTop: 20,
  },
});

const IndexScreen = () => {
  const navigation = useNavigation();
  const { state, deleteItem, getEatList } = useContext(Context);

  useEffect(() => {
    getEatList();

    const listener = navigation.addListener('didFocus', () => {
      getEatList();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
      <View style={mainStyles.container}>
      <Text style={styles.title}>
            Mi eat-list:
        </Text>
        <FlatList
          data={state}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View style={styles.row}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.content}>
                    {item.content}
                  </Text>
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <FontAwesome style={styles.icon} name="check" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
          )}
        />
      </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
  ),
});

export default IndexScreen;
