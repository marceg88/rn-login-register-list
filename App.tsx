import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from './src/navigator/RootStackParams';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import FormRegisterScreen from './src/screen/formRegister';
import HomeUser from './src/screen/homeUser';
import LoginScreen from './src/screen/Login';

const Stack = createStackNavigator<RootStackParamsList>()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={FormRegisterScreen}/>
        <Stack.Screen name="Pagination" component={HomeUser}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>  
    
  );
}
