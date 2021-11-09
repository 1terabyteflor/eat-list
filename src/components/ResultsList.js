/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const ResultsList = ({ title, results }) => {
  return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return <Text>{item.name}</Text>;
            }}
            />
    </View>;
};

export default ResultsList;
