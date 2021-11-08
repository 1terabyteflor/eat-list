import React from "react";
import { View, StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { darkGray } from "../utils/colors";

const Search = ({term, onTermChange, onTermSubmit  }) => {
  const searchForRestaurants = () => {};

  return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
            <View style={styles.inputDirection}>
            <Feather 
                style={styles.icon}
                name='search' 
                size={25}/>
            <TextInput 
                placeholder='Buscar'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                style={styles.textInputStyle}/>
        </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 20,
      paddingTop: 25,
      paddingBottom: 5
    },
    containerInput: {
      height: 40,
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: darkGray
    },
    inputDirection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      padding: 5, 
      alignSelf: 'center'
    },
    textInputStyle: {
      flex: 1,
      height: '100%',
      fontSize: 18,
      color: '#000000',
      width: '100%'
    }
  });
  
export default Search;