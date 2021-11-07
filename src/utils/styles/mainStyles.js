import { StyleSheet } from 'react-native';
import { background } from '../colors';


const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    justifyContent: 'center'
  }
});

const mainStyleContainerRow = StyleSheet.create({
  containerStyle: {
    marginStart: 12
  }
});

export default mainStyles;
