import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/EatListContext';
import RestaurantList from '../components/RestaurantList';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editItem } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <RestaurantList
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editItem(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
