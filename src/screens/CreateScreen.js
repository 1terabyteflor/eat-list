import React, { useContext, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Context } from '../context/BlogContext';
import Search from '../components/Search';
import useResults from '../hooks/useResults';
import MovieForm from '../components/MovieForm';


const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <Search term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <MovieForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
