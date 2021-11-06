import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import mainStyles from '../utils/styles/mainStyles';


const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

    return (
      <View style={mainStyles.container}>
      <Text style={styles.title}>
            Por hacer: 
        </Text>
        <FlatList
          data={state}
          keyExtractor={(blogPost) => blogPost.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Show', { id: item.id })}
              >
                <View style={styles.row}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.content}>
                    {item.content}
                  </Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <FontAwesome style={styles.icon} name="check" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );  
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderRadius: 30,
    borderWidth: 1.25,
    margin: 10,
    padding: 15,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 16,
    marginTop: 10
  },
  icon: {
    fontSize: 28,
    alignSelf: 'flex-end', 
    marginTop: 5,
    color: 'green',
    paddingStart: 20,
    paddingTop: 20
  },
});

export default IndexScreen;
