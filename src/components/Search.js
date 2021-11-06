import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'

const Search = ({query, onSearchChange, onSearchSubmit  }) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = value => {
        setSearch(value);
      };
    
      const handleClearSearch = () => {
        setSearch('');
      };
    
    // navego a detalle de película 
    const handleSubmit = () => {
        if (search) {
          navigate('SearchResults', {
            typeRequest: 'search',
            name: search
          });
        }
      };
    
    
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
                value={search}
                onChangeText={onChangeSearch}
                onEndEditing={onSearchSubmit}
                style={styles.textInputStyle}/>
            {search.length > 0 && (
            <TouchableOpacity onPress={handleClearSearch}>
              <Feather
                style={styles.icon}
                name="x"
                size={20}
                color='#000000'
              />
            </TouchableOpacity>
          )}
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
      borderColor: 'gray'
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