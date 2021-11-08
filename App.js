import React from 'react';
import CreateScreen from './src/screens/CreateScreen';
import DetailScreen from './src/screens/DetailScreen';
import IndexScreen from './src/screens/IndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/EatListContext';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'center' }}
        initialRouteName='Create'>
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={{ title: 'Index' }}/>
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{
            title: 'Detalle',
          }}
        />        
        <Stack.Screen
            name='Create'
            component={CreateScreen}
            options={{
                title: 'Create',
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;